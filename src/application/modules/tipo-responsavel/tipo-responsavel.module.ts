import { Module } from '@nestjs/common';
import { TipoResponsavelController } from './tipo-responsavel.controller';
import { TipoResponsavelService } from './tipo-responsavel.service';

@Module({
  imports: [
    //
  ],
  providers: [
    //
    TipoResponsavelService,
    TipoResponsavelController,
  ],
  controllers: [
    //
    TipoResponsavelController,
  ],
  exports: [
    //
    TipoResponsavelService,
  ],
})
export class TipoResponsavelModule {}
