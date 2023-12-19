import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedCrianca1703026115009 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO
    endereco (
      cep_end,
      logradouro_end,
      numero_end,
      bairro_end,
      complemento_end,
      municipio_end,
      uf_end
    )
    VALUES
    (
      '76907-874',
      'Rua Heitor Guilherme',
      844,
      'Parque São Pedro',
      '',
      'Ji-Paraná',
      'RO'
    );
`);

    await queryRunner.query(`
    INSERT INTO
    crianca (
      nome_cri,
      cpf_cri,
      sexo_cri,
      data_nascimento_cri,
      nome_responsavel_cri,
      email_cri,
      id_end_fk,
      id_tr_fk
    )
    VALUES
    (
      'Filipe Guilherme da Cunha',
      '30765152258',
      'Masculino',
      '2003-03-03',
      'João Marcos Ricardo da Cunha',
      'filipe_dacunha@dillon.com.br',
      1,
      2
    );
`);

    await queryRunner.query(`
        INSERT INTO
        telefone (numero_tel, id_cri_fk, id_tr_fk)
        VALUES
        ('(69) 99401-4254', 1, 2);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
