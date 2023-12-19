import { PickType } from '@nestjs/swagger';
import { EnderecoFindByIdResponseDto } from './EnderecoFindByIdResponseDto';

export class EnderecoCreateResponseDto extends PickType(
  EnderecoFindByIdResponseDto,
  ['id'] as const,
) {}
