import { DataSource, EntityManager } from 'typeorm';
import { TelefoneEntity } from '../entities/telefone.entity';

export type ITelefoneRepository = ReturnType<typeof getTelefoneRepository>;

export const getTelefoneRepository = (ds: DataSource | EntityManager) => {
  return ds.getRepository(TelefoneEntity).extend({});
};
