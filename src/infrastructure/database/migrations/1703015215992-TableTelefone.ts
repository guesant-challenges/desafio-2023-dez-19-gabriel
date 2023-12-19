import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TableTelefone1703015215992 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'telefone',

        columns: [
          {
            name: 'id_tel',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true,
          },

          {
            name: 'numero_tel',
            type: 'text',
            isNullable: false,
          },

          {
            name: 'id_cri_fk',
            type: 'int',
            isNullable: false,
          },

          {
            name: 'id_tr_fk',
            type: 'int',
            isNullable: true,
          },
        ],

        foreignKeys: [
          {
            columnNames: ['id_cri_fk'],
            referencedColumnNames: ['id_cri'],
            referencedTableName: 'crianca',
          },
          {
            columnNames: ['id_tr_fk'],
            referencedColumnNames: ['id_tr'],
            referencedTableName: 'tipo_responsavel',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('telefone', true, true);
  }
}
