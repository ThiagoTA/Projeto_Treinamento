/* eslint-disable camelcase */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToMany,
} from 'typeorm';

import Funcionarios from './Funcionarios';
import Cursos from './Cursos';

@Entity('treinamentos')
class Treinamentos {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Cursos)
  @JoinColumn({ name: 'id_curso' })
  idcursos: Cursos;

  @ManyToMany(() => Funcionarios)
  @JoinColumn({ name: 'id_funcionario' })
  idfuncionarios: Funcionarios;

  @Column()
  id_funcionario: string;

  @Column()
  id_curso: string;

  @Column('time with time zone')
  data_treinamento: Date;

  @Column()
  vencimento_treinamento: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Treinamentos;
