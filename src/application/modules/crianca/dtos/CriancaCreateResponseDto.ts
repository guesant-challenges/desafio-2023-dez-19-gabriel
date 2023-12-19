import { PickType } from '@nestjs/swagger';
import { CriancaFindByIdResponseDto } from './CriancaFindByIdResponseDto';

export class CriancaCreateResponseDto extends PickType(
  CriancaFindByIdResponseDto,
  ['id'] as const,
) {}
