import { PickType } from '@nestjs/swagger';
import { TelefoneFindByIdResponseDto } from '../../telefone/dtos/TelefoneFindByIdResponseDto';

export class CriancaCreateDtoTelefone extends PickType(
  TelefoneFindByIdResponseDto,
  ['numero', 'tipoResponsavel'] as const,
) {}
