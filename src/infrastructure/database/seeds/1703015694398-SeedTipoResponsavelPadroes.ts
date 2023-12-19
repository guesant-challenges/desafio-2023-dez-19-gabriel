import { MigrationInterface, QueryRunner } from 'typeorm';

const NOMES = [
  //
  'Mãe',
  'Pai',
  'Avós',
  'Outros',
];

export class SeedTipoResponsavelPadroes1703015694398
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const nome of NOMES) {
      await queryRunner.query(`
        INSERT INTO "tipo_responsavel" ("nome_tr") VALUES ('${nome}');
    `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    for (const nome of NOMES) {
      await queryRunner.query(`
        DELETE FROM "tipo_responsavel" WHERE "nome_tr" = '${nome}';
    `);
    }
  }
}
