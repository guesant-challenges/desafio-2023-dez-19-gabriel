import { Provider } from '@nestjs/common';
import { DataSourceApp } from 'src/infrastructure/database/providers/data-source-app.provider';
import { DataSource } from 'typeorm';
import { DatabaseContext } from '../database-context';

export const DatabaseContextApp = Symbol('DatabaseContextApp');

export const DatabaseContextAppProvider: Provider = {
  provide: DatabaseContextApp,

  useFactory: (
    //

    dataSourceApp: DataSource,
  ) => {
    const databaseContext = new DatabaseContext(dataSourceApp);
    return databaseContext;
  },

  inject: [
    //
    DataSourceApp,
  ],
};
