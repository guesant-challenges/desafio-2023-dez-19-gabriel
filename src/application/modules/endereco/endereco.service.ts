import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseContext } from '../../../infrastructure/database-context/database-context';
import { DatabaseContextApp } from '../../../infrastructure/database-context/providers/database-context-app.provider';
import { EnderecoEntity } from '../../../infrastructure/database/entities/endereco.entity';
import { EnderecoCreateDto } from './dtos/EnderecoCreateDto';
import { EnderecoFindByIdResponseDto } from './dtos/EnderecoFindByIdResponseDto';
import { EnderecoUpdateDto } from './dtos/EnderecoUpdateDto';

@Injectable()
export class EnderecoService {
  constructor(
    //
    @Inject(DatabaseContextApp)
    private databaseContextApp: DatabaseContext,
  ) {}

  async enderecoFindById(
    enderecoId: number,
  ): Promise<EnderecoFindByIdResponseDto> {
    const enderecoRepository = this.databaseContextApp.enderecoRepository;

    const endereco = await enderecoRepository
      .createQueryBuilder('endereco')
      .select(['endereco'])
      .where('endereco.id = :enderecoId', { enderecoId })
      .getOne();

    if (endereco === null) {
      throw new NotFoundException(
        'O ID informado não está relacionado a nenhum endereço do sistema.',
      );
    }

    return endereco;
  }

  async enderecoCreate(enderecoCreateDto: EnderecoCreateDto) {
    const enderecoRepository = this.databaseContextApp.enderecoRepository;

    const endereco = <EnderecoEntity>{
      cep: enderecoCreateDto.cep,
      logradouro: enderecoCreateDto.logradouro,
      numero: enderecoCreateDto.numero,
      bairro: enderecoCreateDto.bairro,
      complemento: enderecoCreateDto.complemento,
      municipio: enderecoCreateDto.municipio,
      uf: enderecoCreateDto.uf,
    };

    await enderecoRepository.save(endereco);

    return {
      id: endereco.id,
    };
  }

  async enderecoUpdate(
    enderecoId: number,
    enderecoUpdateDto: EnderecoUpdateDto,
  ) {
    const enderecoRepository = this.databaseContextApp.enderecoRepository;

    const enderecoAtual = await this.enderecoFindById(enderecoId);

    const enderecoAtualizado = <EnderecoEntity>{
      ...enderecoAtual,

      cep: enderecoUpdateDto.cep,
      logradouro: enderecoUpdateDto.logradouro,
      numero: enderecoUpdateDto.numero,
      bairro: enderecoUpdateDto.bairro,
      complemento: enderecoUpdateDto.complemento,
      municipio: enderecoUpdateDto.municipio,
      uf: enderecoUpdateDto.uf,

      id: enderecoAtual.id,
    };

    await enderecoRepository.save(enderecoAtualizado);

    return {
      id: enderecoAtualizado.id,
    };
  }

  async enderecoCreateOrUpdate(
    dto: EnderecoCreateDto | EnderecoUpdateDto,
    enderecoId: number | null = null,
  ) {
    if (enderecoId === null) {
      return this.enderecoCreate(dto);
    } else {
      return this.enderecoUpdate(enderecoId, dto);
    }
  }

  async enderecoDeleteById(enderecoId: number) {
    const enderecoRepository = this.databaseContextApp.enderecoRepository;

    const endereco = await this.enderecoFindById(enderecoId);

    await enderecoRepository
      .createQueryBuilder()
      .delete()
      .where('id = :enderecoId', { enderecoId: endereco.id })
      .execute();

    return true;
  }
}
