import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CriancaService } from './crianca.service';
import { CriancaCreateDto } from './dtos/CriancaCreateDto';
import { CriancaCreateResponseDto } from './dtos/CriancaCreateResponseDto';
import { CriancaFindAllResponseDtoSingle } from './dtos/CriancaFindAllResponseDtoSingle';
import { CriancaFindByIdResponseDto } from './dtos/CriancaFindByIdResponseDto';
import { CriancaUpdateResponseDto } from './dtos/CriancaUpdateResponseDto';

@Controller('criancas')
export class CriancaController {
  constructor(
    //

    private criancaService: CriancaService,
  ) {}

  @Post('/')
  @ApiResponse({
    type: CriancaCreateResponseDto,
    status: 201,
    description: 'A criança foi cadastrada com sucesso.',
  })
  @ApiResponse({
    status: 400,
    description: 'Entrada de dados incorreta.',
  })
  criancaCreate(@Body() criancaCreateDto: CriancaCreateDto) {
    return this.criancaService.criancaCreate(criancaCreateDto);
  }

  @Get('/')
  @ApiResponse({
    type: [CriancaFindAllResponseDtoSingle],
    status: 200,
    description: 'Resultado da consulta de crianças.',
  })
  criancaFindAll() {
    return this.criancaService.criancaFindAll();
  }

  @Put('/:id')
  @ApiResponse({
    type: CriancaUpdateResponseDto,
    status: 200,
    description: 'A criança foi atualizada com sucesso.',
  })
  @ApiResponse({
    status: 400,
    description: 'Entrada de dados incorreta.',
  })
  criancaUpdate(
    @Param('id', ParseIntPipe)
    criancaId: number,
    @Body() criancaCreateDto: CriancaCreateDto,
  ) {
    return this.criancaService.criancaUpdate(criancaId, criancaCreateDto);
  }

  @Get('/:id')
  @ApiResponse({
    type: CriancaFindByIdResponseDto,
    status: 200,
    description: 'Dados da criança no sistema a partir do id.',
  })
  @ApiResponse({
    status: 404,
    description:
      'O ID informado não está relacionado a nenhuma criança do sistema.',
  })
  criancaFindById(
    @Param('id', ParseIntPipe)
    criancaId: number,
  ) {
    return this.criancaService.criancaFindById(criancaId);
  }

  @Delete('/:id')
  @ApiResponse({
    type: Boolean,
    status: 200,
    description: 'Criança excluída com sucesso.',
  })
  @ApiResponse({
    status: 404,
    description:
      'O ID informado não está relacionado a nenhuma criança do sistema.',
  })
  criancaDeleteById(
    @Param('id', ParseIntPipe)
    criancaId: number,
  ) {
    return this.criancaService.criancaDeleteById(criancaId);
  }
}
