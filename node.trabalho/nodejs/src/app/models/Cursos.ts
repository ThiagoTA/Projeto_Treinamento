/* eslint-disable camelcase */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cursos')
class Cursos {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  curso: string;

  @Column()
  cargahoráriadocurso: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Cursos;
