import { PickType } from '@nestjs/swagger';
import { TipoResponsavelFindByIdResponseDto } from './TipoResponsavelFindByIdResponseDto';

export class TipoResponsavelTargetDto extends PickType(
  TipoResponsavelFindByIdResponseDto,
  [
    //
    'id',
  ] as const,
) {}
