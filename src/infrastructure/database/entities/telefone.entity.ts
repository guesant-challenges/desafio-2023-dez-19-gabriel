import { CriancaModel, TelefoneModel, TipoResponsavelModel } from 'src/domain';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { CriancaEntity } from './crianca.entity';
import { TipoResponsavelEntity } from './tipo-responsavel.entity';

@Entity('Telefone')
export class TelefoneEntity implements TelefoneModel {
  @PrimaryColumn({ name: 'id_tel', type: 'int' })
  id: number;

  //

  @Column({ name: 'numero_tel', type: 'text' })
  numero: string;

  //

  @ManyToOne(() => CriancaEntity)
  @JoinColumn({ name: 'id_cri_fk', referencedColumnName: 'id_cri' })
  crianca: CriancaModel;

  @ManyToOne(() => TipoResponsavelEntity)
  @JoinColumn({ name: 'id_tr_fk', referencedColumnName: 'id_tr' })
  tipoResponsavel: TipoResponsavelModel;
}
