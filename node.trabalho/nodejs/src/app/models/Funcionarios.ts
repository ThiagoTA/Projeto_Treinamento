/* eslint-disable camelcase */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('funcionarios')
class Funcionarios {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome_funcionario: string;

  @Column()
  email_funcionario: string;

  @Column()
  foto_funcionario: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Funcionarios;
