import { Global, Module } from '@nestjs/common';
import { EnvironmentConfigService } from './environment-config.service';

@Global()
@Module({
  imports: [
    //
  ],
  providers: [
    //
    EnvironmentConfigService,
  ],

  exports: [
    //
    EnvironmentConfigService,
  ],
})
export class EnvironmentConfigModule {}
