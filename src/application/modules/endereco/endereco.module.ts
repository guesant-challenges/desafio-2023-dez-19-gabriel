import { Module } from '@nestjs/common';
import { EnderecoController } from './endereco.controller';
import { EnderecoService } from './endereco.service';

@Module({
  imports: [
    //
  ],
  providers: [
    //
    EnderecoService,
    EnderecoController,
  ],
  controllers: [
    //
    EnderecoController,
  ],
  exports: [
    //
    EnderecoService,
  ],
})
export class EnderecoModule {}
