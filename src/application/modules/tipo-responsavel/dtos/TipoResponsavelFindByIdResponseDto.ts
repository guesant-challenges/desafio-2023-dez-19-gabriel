import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, MinLength } from 'class-validator';
import { TipoResponsavelModel } from '../../../../domain';

export class TipoResponsavelFindByIdResponseDto {
  @ApiProperty({
    type: 'integer',
    description: 'ID do tipo de responsável cadastrado.',
    minimum: 1,
  })
  @IsInt()
  @IsPositive()
  id: TipoResponsavelModel['id'];

  @ApiProperty({
    type: String,
    minLength: 3,
    description: 'Nome do tipo de responsável.',
  })
  @IsString()
  @MinLength(3)
  nome: TipoResponsavelModel['nome'];
}
