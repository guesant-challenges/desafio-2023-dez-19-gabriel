import { DataSource } from 'typeorm';
import { getDataSourceEnvironmentConfigService } from './data-sources-environment-config/get-data-source-environment-config-service';

const getMigrationDataSource = async () => {
  const environmentConfigService =
    await getDataSourceEnvironmentConfigService();

  const dataSourceMigrationOptions =
    environmentConfigService.getTypeOrmDataSourceMigration();

  const dataSourceMigration = new DataSource(dataSourceMigrationOptions);

  return dataSourceMigration;
};

export default getMigrationDataSource();
