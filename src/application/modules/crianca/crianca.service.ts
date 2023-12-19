import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseContext } from '../../../infrastructure/database-context/database-context';
import { DatabaseContextApp } from '../../../infrastructure/database-context/providers/database-context-app.provider';
import { CriancaEntity } from '../../../infrastructure/database/entities/crianca.entity';
import { EnderecoEntity } from '../../../infrastructure/database/entities/endereco.entity';
import { TipoResponsavelEntity } from '../../../infrastructure/database/entities/tipo-responsavel.entity';
import { EnderecoService } from '../endereco/endereco.service';
import { TipoResponsavelService } from '../tipo-responsavel/tipo-responsavel.service';
import { CriancaCreateDto } from './dtos/CriancaCreateDto';
import { CriancaFindByIdResponseDto } from './dtos/CriancaFindByIdResponseDto';
import { CriancaUpdateDto } from './dtos/CriancaUpdateDto';

@Injectable()
export class CriancaService {
  constructor(
    //
    @Inject(DatabaseContextApp)
    private databaseContextApp: DatabaseContext,

    private enderecoService: EnderecoService,
    private tipoResponsavelService: TipoResponsavelService,
  ) {}

  async checkIsCpfUnique(cpf: string, criancaIdTarget: number | null = null) {
    const criancaRepository = this.databaseContextApp.criancaRepository;

    const qb = criancaRepository.createQueryBuilder('crianca').select();

    qb.where('crianca.cpf = :cpf', { cpf });

    if (criancaIdTarget !== null) {
      qb.andWhere('crianca.id <> :criancaIdTarget', { criancaIdTarget });
    }

    const count = await qb.getCount();

    return count === 0;
  }

  async criancaCreate(criancaCreateDto: CriancaCreateDto) {
    const criancaRepository = this.databaseContextApp.criancaRepository;

    //

    const isCpfUnique = await this.checkIsCpfUnique(criancaCreateDto.cpf);

    if (!isCpfUnique) {
      throw new BadRequestException({
        message: ['O CPF informado já está em uso no sistema.'],
        error: 'Bad Request',
        statusCode: 400,
      });
    }

    //

    const isTipoResponsavelValid =
      await this.tipoResponsavelService.checkTipoResponsavelExists(
        criancaCreateDto.tipoResponsavel.id,
      );

    if (!isTipoResponsavelValid) {
      throw new BadRequestException({
        message: ['O tipo de responsável informado não existe no sistema.'],
        error: 'Bad Request',
        statusCode: 400,
      });
    }

    //

    const endereco = await this.enderecoService.enderecoCreate(
      criancaCreateDto.endereco,
    );

    const crianca = <CriancaEntity>{
      nome: criancaCreateDto.nome,
      dataNascimento: criancaCreateDto.dataNascimento,
      sexo: criancaCreateDto.sexo,
      cpf: criancaCreateDto.cpf,
      email: criancaCreateDto.email,
      nomeResponsavel: criancaCreateDto.nomeResponsavel,

      tipoResponsavel: <TipoResponsavelEntity>{
        id: criancaCreateDto.tipoResponsavel.id,
      },

      endereco: <EnderecoEntity>{
        id: endereco.id,
      },
    };

    await criancaRepository.save(crianca);

    return {
      id: crianca.id,
    };
  }

  async criancaFindAll() {
    const criancaRepository = this.databaseContextApp.criancaRepository;

    const criancas = await criancaRepository
      .createQueryBuilder('crianca')
      .select(['crianca'])
      .getMany();

    return criancas;
  }

  async criancaFindById(
    criancaId: number,
  ): Promise<CriancaFindByIdResponseDto> {
    const criancaRepository = this.databaseContextApp.criancaRepository;

    const crianca = await criancaRepository
      .createQueryBuilder('crianca')
      .leftJoin('crianca.endereco', 'endereco')
      .leftJoin('crianca.tipoResponsavel', 'tipoResponsavel')
      .select(['crianca', 'endereco', 'tipoResponsavel'])
      .where('crianca.id = :criancaId', { criancaId })
      .getOne();

    if (crianca === null) {
      throw new NotFoundException(
        'O ID informado não está relacionado a nenhuma criança do sistema.',
      );
    }

    return crianca;
  }

  async criancaDeleteById(criancaId: number) {
    const criancaRepository = this.databaseContextApp.criancaRepository;

    const crianca = await this.criancaFindById(criancaId);

    await criancaRepository
      .createQueryBuilder()
      .delete()
      .where('id = :criancaId', { criancaId: crianca.id })
      .execute();

    await this.enderecoService.enderecoDeleteById(crianca.endereco.id);

    return true;
  }

  async criancaUpdate(criancaId: number, criancaUpdateDto: CriancaUpdateDto) {
    const criancaRepository = this.databaseContextApp.criancaRepository;

    const criancaAtual = await this.criancaFindById(criancaId);

    //

    const isCpfUnique = await this.checkIsCpfUnique(
      criancaUpdateDto.cpf,
      criancaAtual.id,
    );

    if (!isCpfUnique) {
      throw new BadRequestException({
        message: ['O CPF informado já está em uso no sistema.'],
        error: 'Bad Request',
        statusCode: 400,
      });
    }

    //

    const isTipoResponsavelValid =
      await this.tipoResponsavelService.checkTipoResponsavelExists(
        criancaUpdateDto.tipoResponsavel.id,
      );

    if (!isTipoResponsavelValid) {
      throw new BadRequestException({
        message: ['O tipo de responsável informado não existe no sistema.'],
        error: 'Bad Request',
        statusCode: 400,
      });
    }

    //

    await this.enderecoService.enderecoUpdate(
      criancaAtual.endereco.id,
      criancaUpdateDto.endereco,
    );

    const criancaAtualizada = <CriancaEntity>{
      ...criancaAtual,

      nome: criancaUpdateDto.nome,
      dataNascimento: criancaUpdateDto.dataNascimento,
      sexo: criancaUpdateDto.sexo,
      cpf: criancaUpdateDto.cpf,
      email: criancaUpdateDto.email,
      nomeResponsavel: criancaUpdateDto.nomeResponsavel,

      id: criancaAtual.id,
    };

    await criancaRepository.save(criancaAtualizada);

    return {
      id: criancaAtualizada.id,
    };
  }
}
