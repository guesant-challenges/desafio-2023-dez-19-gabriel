import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'reflect-metadata';
import { AppModule } from './application/app.module';
import { EnvironmentConfigService } from './infrastructure/environment-config/environment-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //

  const environmentConfigService = app.get(EnvironmentConfigService);

  //

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: true,
      forbidNonWhitelisted: true,
    }),
  );

  //

  const config = new DocumentBuilder()
    .setTitle('Gestão de Vagas em Creche')
    .setDescription('API do back-end do sistema "Gestão de Vagas em Creche".')
    .setVersion('1.0')
    .addTag('creche')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //

  const port = environmentConfigService.getRuntimePort();
  await app.listen(port);
}
bootstrap();
