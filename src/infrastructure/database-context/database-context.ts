import { DataSource, EntityManager } from 'typeorm';
import { getCriancaRepository } from '../database/repositories/crianca.repository';
import { getEnderecoRepository } from '../database/repositories/endereco.repository';
import { getTelefoneRepository } from '../database/repositories/telefone.repository';
import { getTipoResponsavelRepository } from '../database/repositories/tipo-responsavel.repository';

export class DatabaseContext {
  constructor(
    //
    private ds: DataSource | EntityManager,
  ) {}

  get criancaRepository() {
    return getCriancaRepository(this.ds);
  }

  get enderecoRepository() {
    return getEnderecoRepository(this.ds);
  }

  get telefoneRepository() {
    return getTelefoneRepository(this.ds);
  }

  get tipoResponsavelRepository() {
    return getTipoResponsavelRepository(this.ds);
  }
}
