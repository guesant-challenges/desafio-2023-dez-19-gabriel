import { DataSource, EntityManager } from 'typeorm';
import { CriancaEntity } from '../entities/crianca.entity';

export type ICriancaRepository = ReturnType<typeof getCriancaRepository>;

export const getCriancaRepository = (ds: DataSource | EntityManager) => {
  return ds.getRepository(CriancaEntity).extend({});
};
