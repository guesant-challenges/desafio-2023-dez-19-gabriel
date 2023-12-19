import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      status: 'up',

      docs: '/api',

      controllers: {
        criancas: '/criancas',
        enderecos: '/enderecos',
        telefones: '/telefones',
        tiposResponsaveis: '/tipos-responsaveis',
      },
    };
  }
}
