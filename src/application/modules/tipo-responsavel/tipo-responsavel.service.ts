import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseContext } from '../../../infrastructure/database-context/database-context';
import { DatabaseContextApp } from '../../../infrastructure/database-context/providers/database-context-app.provider';
import { TipoResponsavelFindByIdResponseDto } from './dtos/TipoResponsavelFindByIdResponseDto';

@Injectable()
export class TipoResponsavelService {
  constructor(
    //
    @Inject(DatabaseContextApp)
    private databaseContextApp: DatabaseContext,
  ) {}

  findAll() {
    const tipoResponsavelRepository =
      this.databaseContextApp.tipoResponsavelRepository;

    return tipoResponsavelRepository.find();
  }

  async tipoResponsavelFindByIdNullable(
    tipoResponsavelId: number,
  ): Promise<TipoResponsavelFindByIdResponseDto | null> {
    const tipoResponsavelRepository =
      this.databaseContextApp.tipoResponsavelRepository;

    const tipoResponsavel = await tipoResponsavelRepository
      .createQueryBuilder('tipoResponsavel')
      .select(['tipoResponsavel'])
      .where('tipoResponsavel.id = :tipoResponsavelId', { tipoResponsavelId })
      .getOne();

    return tipoResponsavel;
  }

  async tipoResponsavelFindById(
    tipoResponsavelId: number,
  ): Promise<TipoResponsavelFindByIdResponseDto> {
    const tipoResponsavel =
      await this.tipoResponsavelFindByIdNullable(tipoResponsavelId);

    if (tipoResponsavel === null) {
      throw new NotFoundException(
        'O ID informado não está relacionado a nenhum tipo de responsável no sistema.',
      );
    }

    return tipoResponsavel;
  }

  async checkTipoResponsavelExists(
    tipoResponsavelId: number,
  ): Promise<boolean> {
    const tipoResponsavel =
      await this.tipoResponsavelFindByIdNullable(tipoResponsavelId);

    return tipoResponsavel !== null;
  }
}
