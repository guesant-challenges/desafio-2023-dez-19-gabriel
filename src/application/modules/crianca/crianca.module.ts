import { Module } from '@nestjs/common';
import { CriancaController } from './crianca.controller';
import { CriancaService } from './crianca.service';

@Module({
  imports: [
    //
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
