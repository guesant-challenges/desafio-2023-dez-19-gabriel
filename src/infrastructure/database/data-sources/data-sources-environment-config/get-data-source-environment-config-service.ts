import { NestFactory } from '@nestjs/core';
import { EnvironmentConfigService } from '../../../environment-config/environment-config.service';
import { DataSourcesEnvironmentConfigModule } from './data-sources-environment-config.module';

export const getDataSourceEnvironmentConfigService = async () => {
  const app = await NestFactory.create(DataSourcesEnvironmentConfigModule);

  const environmentConfigService = app.get(EnvironmentConfigService);

  return environmentConfigService;
};
