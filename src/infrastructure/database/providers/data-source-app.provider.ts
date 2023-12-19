import { Provider } from '@nestjs/common';
import { EnvironmentConfigService } from 'src/infrastructure/environment-config/environment-config.service';
import { DataSource } from 'typeorm';

export const DataSourceApp = Symbol('DataSourceApp');

export const DataSourceAppProvider: Provider = {
  provide: DataSourceApp,

  async useFactory(environmentConfigService: EnvironmentConfigService) {
    const dataSourceAppOptions =
      environmentConfigService.getTypeOrmDataSourceApp();

    const dataSourceApp = new DataSource(dataSourceAppOptions);

    await dataSourceApp.initialize();

    return dataSourceApp;
  },

  inject: [
    //
    EnvironmentConfigService,
  ],
};
