import { PickType } from '@nestjs/swagger';
import { CriancaFindByIdResponseDto } from './CriancaFindByIdResponseDto';

export class CriancaUpdateResponseDto extends PickType(
  CriancaFindByIdResponseDto,
  ['id'] as const,
) {}
