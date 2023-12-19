import { PickType } from '@nestjs/swagger';
import { EnderecoFindByIdResponseDto } from './EnderecoFindByIdResponseDto';

export class EnderecoCreateDto extends PickType(EnderecoFindByIdResponseDto, [
  'cep',
  'logradouro',
  'numero',
  'bairro',
  'complemento',
  'municipio',
  'uf',
] as const) {}
