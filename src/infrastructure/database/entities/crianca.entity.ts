import { CriancaModel } from 'src/domain';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EnderecoEntity } from './endereco.entity';
import { TelefoneEntity } from './telefone.entity';
import { TipoResponsavelEntity } from './tipo-responsavel.entity';

@Entity('crianca')
export class CriancaEntity implements CriancaModel {
  @PrimaryGeneratedColumn({ name: 'id_cri', type: 'int' })
  id: number;

  @Column({ name: 'nome_cri', type: 'text' })
  nome: string;

  @Column({ name: 'cpf_cri', type: 'text' })
  cpf: string;

  @Column({ name: 'sexo_cri', type: 'text' })
  sexo: string;

  @Column({ name: 'data_nascimento_cri', type: 'date' })
  dataNascimento: Date | null;

  @Column({ name: 'nome_responsavel_cri', type: 'text' })
  nomeResponsavel: string;

  @Column({ name: 'email_cri', type: 'text' })
  email: string | null;

  @ManyToOne(() => EnderecoEntity)
  @JoinColumn({ name: 'id_end_fk', referencedColumnName: 'id' })
  endereco: EnderecoEntity;

  @ManyToOne(() => TipoResponsavelEntity)
  @JoinColumn({ name: 'id_tr_fk', referencedColumnName: 'id' })
  tipoResponsavel: TipoResponsavelEntity;

  @OneToMany(() => TelefoneEntity, (telefone) => telefone.crianca)
  telefones: TelefoneEntity[];
}
