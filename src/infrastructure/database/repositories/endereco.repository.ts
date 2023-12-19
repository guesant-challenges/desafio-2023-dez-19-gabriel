import { DataSource, EntityManager } from 'typeorm';
import { EnderecoEntity } from '../entities/endereco.entity';

export type IEnderecoRepository = ReturnType<typeof getEnderecoRepository>;

export const getEnderecoRepository = (ds: DataSource | EntityManager) => {
  return ds.getRepository(EnderecoEntity).extend({});
};
