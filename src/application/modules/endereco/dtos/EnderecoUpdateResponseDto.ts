import { PickType } from '@nestjs/swagger';
import { EnderecoFindByIdResponseDto } from './EnderecoFindByIdResponseDto';

export class EnderecoUpdateResponseDto extends PickType(
  EnderecoFindByIdResponseDto,
  ['id'] as const,
) {}
