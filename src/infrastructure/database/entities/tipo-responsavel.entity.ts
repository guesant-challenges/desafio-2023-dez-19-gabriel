import { TipoResponsavelModel } from 'src/domain';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tipo_responsavel')
export class TipoResponsavelEntity implements TipoResponsavelModel {
  @PrimaryColumn({ name: 'id_tr', type: 'int' })
  id: number;

  @Column({ name: 'nome_tr', type: 'text' })
  nome: string;
}
