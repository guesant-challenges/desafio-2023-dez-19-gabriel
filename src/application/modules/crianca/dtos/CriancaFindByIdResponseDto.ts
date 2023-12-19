import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsInt,
  IsString,
  Matches,
  MinLength,
  Validate,
  ValidateNested,
} from 'class-validator';
import { CriancaModel } from '../../../../domain';
import { ConstraintValidCpf } from '../../../../infrastructure/class-validator/constraint-valid-cpf/ConstraintValidCpf';
import { EnderecoFindByIdResponseDto } from '../../endereco/dtos/EnderecoFindByIdResponseDto';
import { TipoResponsavelFindByIdResponseDto } from '../../tipo-responsavel/dtos/TipoResponsavelFindByIdResponseDto';
import { CriancaSexo } from './CriancaSexo';

export class CriancaFindByIdResponseDto {
  @ApiProperty({
    type: 'integer',
    description: 'ID da criança cadastrada.',
  })
  @IsInt()
  id: CriancaModel['id'];

  @ApiProperty({
    type: String,
    minLength: 3,
    description: 'Nome da criança.',
  })
  @IsString()
  @MinLength(3)
  nome: CriancaModel['nome'];

  @ApiProperty({
    type: String,
    minLength: 3,
    description:
      'Data de nascimento da criança no formato americano ano/mes/dia (YYYY-MM-DD).',
  })
  @IsDateString()
  @Matches(/[\d]{4}-[\d]{2}-[\d]{2}/, {
    message: 'A data de nascimento DEVE estar no formato YYYY-MM-DD.',
  })
  dataNascimento: CriancaModel['dataNascimento'];

  @ApiProperty({
    enum: Object.values(CriancaSexo),
    description:
      'Sexo da criança. Possíveis valores: "Masculino" e "Feminino".',
  })
  @IsEnum(CriancaSexo)
  sexo: CriancaModel['sexo'];

  @ApiProperty({
    type: String,
    description: 'CPF da criança.',
  })
  @IsString()
  @Matches(/(^[\d]{3}\.[\d]{3}\.[\d]{3}-[\d]{2}$)|(^[\d]{11}$)/, {
    message: 'O CPF DEVE estar no formato XXX.XXX.XXX-XX ou XXXXXXXXXXX.',
  })
  @Transform(({ value }) =>
    typeof value === 'string' ? value.replace(/[^\d]/g, '') : value,
  )
  @Validate(ConstraintValidCpf, {})
  cpf: CriancaModel['cpf'];

  @ApiProperty({
    type: String,
    description: 'E-mail',
  })
  @IsEmail()
  email: CriancaModel['email'];

  @ApiProperty({
    type: String,
    minLength: 3,
    description: 'Nome do responsável da criança.',
  })
  @IsString()
  @MinLength(3)
  nomeResponsavel: CriancaModel['nomeResponsavel'];

  @ApiProperty({
    type: EnderecoFindByIdResponseDto,
    required: true,
    description: 'Endereço da criança.',
  })
  @Type(() => EnderecoFindByIdResponseDto)
  @ValidateNested()
  endereco: EnderecoFindByIdResponseDto;

  @ApiProperty({
    type: TipoResponsavelFindByIdResponseDto,
    required: true,
    description: 'Tipo de responsável da criança.',
  })
  @Type(() => TipoResponsavelFindByIdResponseDto)
  @ValidateNested()
  tipoResponsavel: TipoResponsavelFindByIdResponseDto;
}
