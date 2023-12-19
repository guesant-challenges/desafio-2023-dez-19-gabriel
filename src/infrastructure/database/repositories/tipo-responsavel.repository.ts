import { DataSource, EntityManager } from 'typeorm';
import { TipoResponsavelEntity } from '../entities/tipo-responsavel.entity';

export type ITipoResponsavelRepository = ReturnType<
  typeof getTipoResponsavelRepository
>;

export const getTipoResponsavelRepository = (
  ds: DataSource | EntityManager,
) => {
  return ds.getRepository(TipoResponsavelEntity).extend({});
};
