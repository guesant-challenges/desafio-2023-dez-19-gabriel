import { PickType } from '@nestjs/swagger';
import { CriancaFindByIdResponseDto } from './CriancaFindByIdResponseDto';

export class CriancaFindAllResponseDtoSingle extends PickType(
  CriancaFindByIdResponseDto,
  [
    //
    'id',
    'nome',
    'dataNascimento',
    'sexo',
    'cpf',
    'email',
    'nomeResponsavel',
  ] as const,
) {}
