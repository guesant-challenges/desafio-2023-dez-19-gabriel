import "reflect-metadata";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/app.module';
import { EnvironmentConfigService } from './infrastructure/environment-config/environment-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //

  const environmentConfigService = app.get(EnvironmentConfigService);

  //

  //

  const port = environmentConfigService.getRuntimePort();
  await app.listen(port);
}
bootstrap();
