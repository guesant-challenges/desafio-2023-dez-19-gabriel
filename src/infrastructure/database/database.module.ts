import { Module } from '@nestjs/common';
import { DataSourceProviders } from './providers/data-source-providers';

@Module({
  imports: [
    //
  ],
  providers: [
    //
    ...DataSourceProviders,
  ],
  exports: [
    //
    ...DataSourceProviders,
  ],
})
export class DatabaseModule {}
