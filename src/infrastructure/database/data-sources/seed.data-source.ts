import { DataSource } from 'typeorm';
import { getDataSourceEnvironmentConfigService } from './data-sources-environment-config/get-data-source-environment-config-service';

const getDataSourceSeed = async () => {
  const environmentConfigService =
    await getDataSourceEnvironmentConfigService();

  const dataSourceSeedOptions =
    environmentConfigService.getTypeOrmDataSourceSeed();

  const dataSourceSeed = new DataSource(dataSourceSeedOptions);

  return dataSourceSeed;
};

export default getDataSourceSeed();
