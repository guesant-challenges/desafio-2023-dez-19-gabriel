import { ApiProperty, PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { EnderecoCreateDto } from '../../endereco/dtos/EnderecoCreateDto';
import { TipoResponsavelTargetDto } from '../../tipo-responsavel/dtos/TipoResponsavelTargetDto';
import { CriancaCreateDtoTelefone } from './CriancaCreateDtoTelefone';
import { CriancaFindByIdResponseDto } from './CriancaFindByIdResponseDto';

export class CriancaCreateDto extends PickType(CriancaFindByIdResponseDto, [
  'nome',
  'dataNascimento',
  'sexo',
  'cpf',
  'email',
  'nomeResponsavel',
] as const) {
  @ApiProperty({
    type: EnderecoCreateDto,
    required: true,
    description: 'Endereço da criança.',
  })
  @Type(() => EnderecoCreateDto)
  @ValidateNested()
  endereco: EnderecoCreateDto;

  @ApiProperty({
    type: TipoResponsavelTargetDto,
    required: true,
    description: 'Tipo de responsável da criança.',
  })
  @Type(() => TipoResponsavelTargetDto)
  @ValidateNested()
  tipoResponsavel: TipoResponsavelTargetDto;

  @ApiProperty({
    type: [CriancaCreateDtoTelefone],
    required: true,
    description: 'Telefones de contato da criança.',
  })
  @IsArray()
  @Type(() => CriancaCreateDtoTelefone)
  @ValidateNested()
  telefones: CriancaCreateDtoTelefone[];
}
