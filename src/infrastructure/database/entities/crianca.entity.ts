import { CriancaModel } from 'src/domain';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { EnderecoEntity } from './endereco.entity';

@Entity('crianca')
export class CriancaEntity implements CriancaModel {
  @PrimaryColumn({ name: 'id_cri', type: 'int' })
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
  email: string;

  @ManyToOne(() => EnderecoEntity)
  @JoinColumn({ name: 'id_end_fk', referencedColumnName: 'id_end' })
  endereco: EnderecoEntity;
}
