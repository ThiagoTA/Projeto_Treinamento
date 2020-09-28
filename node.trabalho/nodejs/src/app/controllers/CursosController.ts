/* eslint-disable import/export */
import { de } from 'date-fns/locale';
import { getRepository } from 'typeorm';
import Cursos from '../models/Cursos';

interface Request {
  curso: string;
  cargahoráriadocurso: number;
}

class CursosController {
  public async store({ curso, cargahoráriadocurso }: Request): Promise<Cursos> {
    const cursosRepository = getRepository(Cursos);

    const cursosreg = cursosRepository.create({
      curso,
      cargahoráriadocurso,
    });

    await cursosRepository.save(cursosreg);
    return cursosreg;
  }
}

export default CursosController;
