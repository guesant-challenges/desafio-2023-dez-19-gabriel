CREATE TABLE "endereco" (
  "id_end" SERIAL NOT NULL PRIMARY KEY,
  "cep_end" text NOT NULL,
  "logradouro_end" text NOT NULL,
  "numero_end" int NOT NULL,
  "bairro_end" text NOT NULL,
  "complemento_end" text,
  "municipio_end" text NOT NULL,
  "uf_end" text NOT NULL
);

CREATE TABLE "tipo_responsavel" (
  "id_tr" SERIAL NOT NULL PRIMARY KEY,
  "nome_tr" text NOT NULL
);

CREATE TABLE "crianca" (
  "id_cri" SERIAL NOT NULL PRIMARY KEY,
  "nome_cri" text NOT NULL,
  "cpf_cri" text NOT NULL,
  "sexo_cri" text,
  "data_nascimento_cri" date,
  "nome_responsavel_cri" text NOT NULL,
  "email_cri" text,
  "id_end_fk" int,
  FOREIGN KEY ("id_end_fk") REFERENCES "endereco" ("id_end"),
);

CREATE TABLE "telefone" (
  "id_tel" SERIAL NOT NULL PRIMARY KEY,
  "numero_tel" text NOT NULL,
  "id_cri_fk" int NOT NULL,
  FOREIGN KEY ("id_cri_fk") REFERENCES "crianca" ("id_cri"),
  "id_tr_fk" int,
  FOREIGN KEY ("id_tr_fk") REFERENCES "tipo_responsavel" ("id_tr"),
)