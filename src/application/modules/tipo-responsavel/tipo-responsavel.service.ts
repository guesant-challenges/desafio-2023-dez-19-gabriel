import { Inject, Injectable } from '@nestjs/common';
import { DatabaseContext } from '../../../infrastructure/database-context/database-context';
import { DatabaseContextApp } from '../../../infrastructure/database-context/providers/database-context-app.provider';

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
}
