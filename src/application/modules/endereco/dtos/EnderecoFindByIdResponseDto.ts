import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { EnderecoModel } from '../../../../domain';

export class EnderecoFindByIdResponseDto {
  @ApiProperty({
    type: 'integer',
    description: 'ID da endereço cadastrado.',
  })
  @IsInt()
  id: EnderecoModel['id'];

  @ApiProperty({
    type: String,
    description: 'CEP do endereço no formato XXXXX-XXX.',
    minLength: 9,
    maxLength: 9,
  })
  @IsString()
  @Length(9)
  @Matches(/^[\d]{5}-[\d]{3}$/)
  cep: EnderecoModel['cep'];

  @ApiProperty({
    type: String,
    minLength: 1,
    description: 'Logradouro do Endereço.',
  })
  @IsString()
  logradouro: EnderecoModel['logradouro'];

  @ApiProperty({
    type: 'integer',
    description: 'Número do endereço.',
    minimum: 1,
  })
  @IsInt()
  @IsPositive()
  numero: EnderecoModel['numero'];

  @ApiProperty({
    type: String,
    minLength: 1,
    description: 'Bairro do Endereço.',
  })
  @IsString()
  bairro: EnderecoModel['bairro'];

  @ApiProperty({
    type: String,
    required: false,
    description: 'Complemento do Endereço.',
  })
  @IsString()
  @IsOptional()
  complemento: EnderecoModel['complemento'];

  @ApiProperty({
    type: String,
    minLength: 1,
    description: 'Município do Endereço.',
  })
  @IsString()
  municipio: EnderecoModel['municipio'];

  @ApiProperty({
    type: String,
    minLength: 2,
    maxLength: 2,
    description: 'Unidade Federativa do Endereço no formato XX.',
  })
  @IsString()
  @Length(2)
  @MinLength(2)
  @MaxLength(2)
  uf: EnderecoModel['uf'];
}
