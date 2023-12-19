import { CriancaModel } from './crianca.model';
import { TipoResponsavelModel } from './tipo-responsavel.model';

export interface TelefoneModel {
  id: number;

  numero: string;

  crianca: CriancaModel;
  tipoResponsavel: TipoResponsavelModel | null;
}
