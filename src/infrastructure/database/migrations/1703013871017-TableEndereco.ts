import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TableEndereco1703013871017 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'endereco',

        columns: [
          {
            name: 'id_end',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true,
          },

          {
            name: 'cep_end',
            type: 'text',
            isNullable: false,
          },

          {
            name: 'logradouro_end',
            type: 'text',
            isNullable: false,
          },

          {
            name: 'numero_end',
            type: 'int',
            isNullable: false,
          },

          {
            name: 'bairro_end',
            type: 'text',
            isNullable: false,
          },

          {
            name: 'complemento_end',
            type: 'text',
            isNullable: true,
          },

          {
            name: 'municipio_end',
            type: 'text',
            isNullable: false,
          },

          {
            name: 'uf_end',
            type: 'text',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('endereco', true, true);
  }
}
