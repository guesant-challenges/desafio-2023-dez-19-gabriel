# desafio-2023-dez-19-gabriel

Este repositório contém a solução ao "Teste Prático de Desenvolvimento | Área: Programação Back-end" (edital 72/2023/JIPA), realizado no dia 19 de dezembro de 2023, no Instituto Federal de Rondônia, Campus Ji-Paraná.

Participante: Gabriel Rodrigues Antunes.

## Serviços

| Nome do container  | Porta interna | Descrição                | Porta externa mapeada ao S.O.                    | Protocolo  | Plataforma base                             |
|--------------------|---------------|--------------------------|--------------------------------------------------|------------|---------------------------------------------|
| `app-sistema-node` | `3000`        | API HTTP REST.           | [`http://localhost:3000`](http://localhost:3000) | `HTTP`     | `node:20` (baseado no debian); `nestjs@10`; |
| `app-sistema-db`   | `5432`        | Banco de dados postgres. | [`localhost:5432`](localhost:5432)               | `postgres` | `postgres:16-alpine` (baseado no alpine);   |

## Desenvolvimento

### Obter o código do repositório.

Para obter o código deste repositório, é necessário a utilização do sistema de versionamento de código [Git](https://git-scm.com/).

Entre no caminho que deseja obter o código do projeto (como `~/Documentos/projetos`) e execute os seguintes comandos:

```bash
git clone https://github.com/guesant-challenges/desafio-2023-dez-19-gabriel.git;
cd desafio-2023-dez-19-gabriel;
```

Os comandos acima permitem clonar o repositório Git e entrar na pasta criada, respectivamente.

### Ambiente de desenvolvimento.

Neste projeto, é utilizado a plataforma de containers `docker`, que assegura o mesmo ambiente de execução (sistema operacional, bibliotecas e ferramentas instaladas). Por isso, é imprescindível que o colaborador tenha o `docker` e o `docker compose` configurados no sistema operacional de desenvolvimento para uma melhor experiência de desenvolvimento, podendo utilizar como guia a documentação oficial disponibilizada online em: <https://docs.docker.com/get-docker/>.

#### docker: obter imagens base

Tendo em vista que o presente projeto necessita de utilizar o nodejs e o banco de dados postgres, o colaborador pode obter as imagens oficiais dos containers com o seguinte comando:

```bash
docker compose pull
```

O comando acima baixa as imagens preparadas com essas ferramentas para a integração ao ambiente de desenvolvimento do desafio.

#### Configurar variáveis de ambiente

Assim como em qualquer sistema, é necessário configurar os "segredos" ou as configurações de execução do projeto. Por o seguinte projeto possuir dois containers docker, foi escolhido serparar as configurações em dois arquivos: `.env` e `.db-postgres.env`. Cada um fornece as característias de execução, sendo elas: configurações da aplicação nodejs e configurações do banco de dados postgres, respectivamente.

**NOTA**: os arquivos `.env` e `.db-postgres.env` NÃO ESTÃO PRESENTES NO REPOSITÓRIO. Isso se deve por questões lógicas (o qual os valores variam de ambiente, desenvolvedor e propósito) e de segurança. POR ISSO CADA DESENVOLVEDOR DEVE SEGUIR O FORMATO ESPECIFICADO, SENDO NECESSÁRIO A CRIAÇÃO CORRETA DESSES ARQUIVOS PARA O FUNCIONAMENTO CORRETO DO SISTEMA.

##### `.env`

| Nome   | Descrição                                                                                | Padrão |
| ------ | ---------------------------------------------------------------------------------------- | ------ |
| `PORT` | Número inteiro que indica o número da porta que o servidor HTTP escutará as requisições. | `3000` |

```env
# .env
PORT=3000
```

##### `.db-postgres.env`

| Nome                | Descrição                                              | Padrão             |
| ------------------- | ------------------------------------------------------ | ------------------ |
| `POSTGRES_DB`       | Nome do banco de dados postgres.                       | `postgres`         |
| `POSTGRES_USER`     | Nome do usuário principal do banco de dados postgres.  | `postgres`         |
| `POSTGRES_PASSWORD` | Senha do usuário principal do banco de dados postgres. | `{uuid aleatório}` |

```env
# .db-postgres.env
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=SENHA-GRANDE-MUITO-SEGURA
```

#### docker: iniciar os containers

Com as imagens base obtidas, é possível containers os serviços utilizando o seguinte comando:

```bash
docker compose up -d
```

Esse comando irá iniciar os dois containers (`app-sistema-node` e `app-sistema-db`).

NOTA: O banco de dados estará pronto para uso confome a configuração realizada no arquivo `.db-postgres.env`.

NOTA: O servidor HTTP do `app-sistema-node` não inicia automaticamente. Por isso, é necessário entrar no `shell` do container e executar o script `npm run start:dev` para que o sistema funcione.

Por questões de conveniência, o script para inciar os seviços foi acoplado ao [`Makefile`](./Makefile), tornando, assim, iniciar os serviços uma tarefa mais simples. Tome o seguinte comando como não obrigatório, sendo apenas uma alternativa ao `docker compose up -d`.

```bash
make compose-up;
```

#### docker: app-sistema-node: acesso ao shell

Para ter acesso ao shell do container nodejs, é possível executar o seguinte comando para obter o resultado desejado:

```bash
docker compose exec -it app-sistema-node bash;
```

Assim, um shell `bash` é iniciado na pasta do projeto (`/projeto/app-sistema-node`), permitindo a execução de scripts.

Por questões de conveniência, o script para inciar os seviços foi acoplado ao [`Makefile`](./Makefile), tornando, assim, iniciar os serviços uma tarefa mais simples. Tome o seguinte comando como não obrigatório, sendo apenas uma alternativa ao `docker compose exec -it app-sistema-node bash`.

```bash
make compose-shell;
```

---

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
