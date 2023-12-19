import { EnderecoModel } from './endereco.model';

export interface CriancaModel {
  id: number;

  nome: string;
  dataNascimento: Date | null;
  sexo: string;
  cpf: string;
  email: string;
  nomeResponsavel: string;

  endereco: EnderecoModel | null;
}
