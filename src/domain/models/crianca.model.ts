import { EnderecoModel } from './endereco.model';

export interface CriancaModel {
  id: number;

  nome: string;
  cpf: string;
  sexo: string;
  nome_responsavel: string;
  email: string;

  endereco: EnderecoModel | null;
}
