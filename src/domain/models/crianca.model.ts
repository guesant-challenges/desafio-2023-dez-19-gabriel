import { EnderecoModel } from './endereco.model';
import { TipoResponsavelModel } from './tipo-responsavel.model';

export interface CriancaModel {
  id: number;

  nome: string;
  dataNascimento: Date | null;
  sexo: string;
  cpf: string;
  email: string;
  nomeResponsavel: string;

  endereco: EnderecoModel | null;
  tipoResponsavel: TipoResponsavelModel;
}
