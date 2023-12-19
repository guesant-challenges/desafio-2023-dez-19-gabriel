import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigModule } from 'src/infrastructure/environment-config/environment-config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    //

    ConfigModule.forRoot({
      isGlobal: true,
    }),

    EnvironmentConfigModule,
  ],
  controllers: [
    //

    AppController,
  ],
  providers: [
    //

    AppService,
  ],
})
export class AppModule {}
