import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigModule } from 'src/infrastructure/environment-config/environment-config.module';
import { DatabaseContextModule } from '../infrastructure/database-context/database-context.module';
import { DatabaseModule } from '../infrastructure/database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CriancaModule } from './modules/crianca/crianca.module';
import { EnderecoModule } from './modules/endereco/endereco.module';
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

    DatabaseModule,
    DatabaseContextModule,

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
