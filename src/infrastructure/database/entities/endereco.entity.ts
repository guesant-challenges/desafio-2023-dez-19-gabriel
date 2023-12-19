import { EnderecoModel } from 'src/domain';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('endereco')
export class EnderecoEntity implements EnderecoModel {
  @PrimaryGeneratedColumn({ name: 'id_end', type: 'int' })
  id: number;

  //

  @Column({ name: 'cep_end', type: 'text' })
  cep: string;

  @Column({ name: 'logradouro_end', type: 'text' })
  logradouro: string;

  @Column({ name: 'numero_end', type: 'int' })
  numero: number;

  @Column({ name: 'bairro_end', type: 'text' })
  bairro: string;

  @Column({ name: 'complemento_end', type: 'text' })
  complemento: string | null;

  @Column({ name: 'municipio_end', type: 'text' })
  municipio: string;

  @Column({ name: 'uf_end', type: 'text' })
  uf: string;
}
