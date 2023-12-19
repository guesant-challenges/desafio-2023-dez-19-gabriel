import { TipoResponsavelModel } from 'src/domain';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo_responsavel')
export class TipoResponsavelEntity implements TipoResponsavelModel {
  @PrimaryGeneratedColumn({ name: 'id_tr', type: 'int' })
  id: number;

  @Column({ name: 'nome_tr', type: 'text' })
  nome: string;
}
