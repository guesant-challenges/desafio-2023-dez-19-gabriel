import { EnderecoModel } from 'src/domain';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('endereco')
export class EnderecoEntity implements EnderecoModel {
  @PrimaryColumn({ name: 'id_end', type: 'int' })
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
  complemento: string;

  @Column({ name: 'municipio_end', type: 'text' })
  municipio: string;

  @Column({ name: 'uf_end', type: 'text' })
  uf: string;
}
