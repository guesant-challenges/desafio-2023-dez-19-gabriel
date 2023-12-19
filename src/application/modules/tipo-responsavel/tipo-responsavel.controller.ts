import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { TipoResponsavelFindAllResponseDtoSingle } from './dtos/TipoResponsavelFindAllResponseDtoSingle';
import { TipoResponsavelService } from './tipo-responsavel.service';

@Controller('tipos-responsaveis')
export class TipoResponsavelController {
  constructor(
    //

    private tipoResponsavelService: TipoResponsavelService,
  ) {}

  @Get('/')
  @ApiResponse({
    type: [TipoResponsavelFindAllResponseDtoSingle],
    status: 200,
    description: 'Resultado da consulta de tipos de responsáveis.',
  })
  findAll() {
    return this.tipoResponsavelService.findAll();
  }
}
