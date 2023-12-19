import { DataSourceOptions } from 'typeorm';

export interface IConfigDatabaseConn {
  getDatabaseConnHost(): string;
  getDatabaseConnPort(): number;

  getDatabaseConnUsername(): string;
  getDatabaseConnPassword(): string;

  getDatabaseConnDatabaseName(): string;

  //

  getTypeOrmSharedDataSourceOptions(): Partial<DataSourceOptions>;

  getTypeOrmDataSourceApp(): DataSourceOptions;
  getTypeOrmDataSourceSeed(): DataSourceOptions;
  getTypeOrmDataSourceMigration(): DataSourceOptions;
}
