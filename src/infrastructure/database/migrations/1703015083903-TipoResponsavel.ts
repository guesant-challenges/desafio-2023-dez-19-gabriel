import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TableTipoResponsavel1703015083903 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tipo_responsavel',

        columns: [
          {
            name: 'id_tr',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true,
          },

          {
            name: 'nome_tr',
            type: 'text',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tipo_responsavel', true, true);
  }
}
