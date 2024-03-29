export interface EnderecoModel {
  id: number;

  cep: string;

  logradouro: string;
  numero: number;
  bairro: string;

  complemento: string | null;

  municipio: string;
  uf: string;
}
