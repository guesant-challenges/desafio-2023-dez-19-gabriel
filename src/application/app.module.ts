import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigModule } from 'src/infrastructure/environment-config/environment-config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnderecoModule } from './modules/endereco/endereco.module';
import { CriancaModule } from './modules/crianca/crianca.module';
import { TelefoneModule } from './modules/telefone/telefone.module';
import { TipoResponsavelModule } from './modules/tipo-responsavel/tipo-responsavel.module';

@Module({
  imports: [
    //

    ConfigModule.forRoot({
      isGlobal: true,
    }),

    EnvironmentConfigModule,

    //

    CriancaModule,
    EnderecoModule,
    TelefoneModule,
    TipoResponsavelModule,
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
