export interface EnderecoModel {
  id: number;

  cep: string | null;
  logradouro: string | null;
  numero: number | null;
  bairro: string | null;
  complemento: string | null;
  municipio: string | null;

  UF: string | null;
}
