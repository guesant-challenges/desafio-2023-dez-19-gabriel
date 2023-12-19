import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsPositive,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { TelefoneModel } from '../../../../domain';
import { CriancaTargetDto } from '../../crianca/dtos/CriancaTargetDto';
import { TipoResponsavelTargetDto } from '../../tipo-responsavel/dtos/TipoResponsavelTargetDto';

export class TelefoneFindByIdResponseDto {
  @ApiProperty({
    type: 'integer',
    description: 'ID do telefone cadastrado.',
    minimum: 1,
  })
  @IsInt()
  @IsPositive()
  id: TelefoneModel['id'];

  @ApiProperty({
    type: String,
    minLength: 1,
    description: 'Número do telefone.',
  })
  @IsString()
  @MinLength(1)
  numero: TelefoneModel['numero'];

  @ApiProperty({
    type: CriancaTargetDto,
    required: true,
    description: 'Criança alvo do telefone de contato.',
  })
  @Type(() => CriancaTargetDto)
  @ValidateNested()
  crianca: CriancaTargetDto;

  @ApiProperty({
    type: TipoResponsavelTargetDto,
    required: true,
    description: 'Tipo de responsável do telefone de contado da criança.',
  })
  @Type(() => TipoResponsavelTargetDto)
  @ValidateNested()
  tipoResponsavel: TipoResponsavelTargetDto;
}
