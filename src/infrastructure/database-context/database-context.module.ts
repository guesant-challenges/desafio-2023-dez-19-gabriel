import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DatabaseContextProviders } from './providers/database-context-providers';

@Global()
@Module({
  imports: [
    //
    DatabaseModule,
  ],
  providers: [
    //
    ...DatabaseContextProviders,
  ],
  exports: [
    //
    ...DatabaseContextProviders,
  ],
})
export class DatabaseContextModule {}
