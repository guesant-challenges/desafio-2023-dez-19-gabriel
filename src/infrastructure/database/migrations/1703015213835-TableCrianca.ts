import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TableCrianca1703015213835 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'crianca',

        columns: [
          {
            name: 'id_cri',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true,
          },

          {
            name: 'nome_cri',
            type: 'text',
            isNullable: false,
          },

          {
            name: 'cpf_cri',
            type: 'text',
            isNullable: false,
          },

          {
            name: 'sexo_cri',
            type: 'text',
            isNullable: true,
          },

          {
            name: 'data_nascimento_cri',
            type: 'date',
            isNullable: true,
          },

          {
            name: 'nome_responsavel_cri',
            type: 'text',
            isNullable: false,
          },

          {
            name: 'email_cri',
            type: 'text',
            isNullable: true,
          },

          {
            name: 'id_end_fk',
            type: 'int',
            isNullable: true,
          },
        ],

        foreignKeys: [
          {
            columnNames: ['id_end_fk'],
            referencedColumnNames: ['id_end'],
            referencedTableName: 'endereco',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('crianca', true, true);
  }
}
