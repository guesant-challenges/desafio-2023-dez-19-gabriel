import { PickType } from '@nestjs/swagger';
import { TipoResponsavelFindByIdResponseDto } from './TipoResponsavelFindByIdResponseDto';

export class TipoResponsavelFindAllResponseDtoSingle extends PickType(
  TipoResponsavelFindByIdResponseDto,
  [
    //
    'id',
    'nome',
  ] as const,
) {}
