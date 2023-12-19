import { Module } from '@nestjs/common';
import { EnderecoModule } from '../endereco/endereco.module';
import { TipoResponsavelModule } from '../tipo-responsavel/tipo-responsavel.module';
import { CriancaController } from './crianca.controller';
import { CriancaService } from './crianca.service';

@Module({
  imports: [
    //
    EnderecoModule,
    TipoResponsavelModule,
  ],
  providers: [
    //
    CriancaService,
    CriancaController,
  ],
  controllers: [
    //
    CriancaController,
  ],
  exports: [
    //
    CriancaService,
  ],
})
export class CriancaModule {}
