import { EnderecoModel } from './endereco.model';

export interface CriancaModel {
  id: number;

  cpf: string;
  sexo: string;
  nome: string;
  email: string;
  dataNascimento: Date | null;
  nomeResponsavel: string;

  endereco: EnderecoModel | null;
}
