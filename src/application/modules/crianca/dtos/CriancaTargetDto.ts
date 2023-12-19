import { PickType } from '@nestjs/swagger';
import { CriancaFindByIdResponseDto } from './CriancaFindByIdResponseDto';

export class CriancaTargetDto extends PickType(CriancaFindByIdResponseDto, [
  //
  'id',
] as const) {}
