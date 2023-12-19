import { Module } from '@nestjs/common';
import { TelefoneController } from './telefone.controller';
import { TelefoneService } from './telefone.service';

@Module({
  imports: [
    //
  ],
  providers: [
    //
    TelefoneService,
    TelefoneController,
  ],
  controllers: [
    //
    TelefoneController,
  ],
  exports: [
    //
    TelefoneService,
  ],
})
export class TelefoneModule {}
