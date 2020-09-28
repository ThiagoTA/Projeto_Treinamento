import { Router } from 'express';
import { getRepository } from 'typeorm';

import CursosController from '../app/controllers/CursosController';
import Cursos from '../app/models/Cursos';

const cursosRouter = Router();

cursosRouter.post('/', async (request, response) => {
  try {
    const { curso, cargahoráriadocurso } = request.body;

    const cursosController = new CursosController();

    const cursoreg = await cursosController.store({
      curso,
      cargahoráriadocurso,
    });

    return response.json(cursoreg);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

cursosRouter.get('/', async (request, response) => {
  const cursosrepositorio = getRepository(Cursos);
  const cursoreg = await cursosrepositorio.find();
  return response.json(cursoreg);
});

cursosRouter.get('/:id', async (request, response) => {
  const cursosrepositorio = getRepository(Cursos);
  const { id } = request.params;
  const cursoreg = await cursosrepositorio.findOne(id);
  return response.json(cursoreg);
});

cursosRouter.delete('/:id', async (request, response) => {
  const cursosrepositorio = getRepository(Cursos);
  const { id } = request.params;
  await cursosrepositorio.delete(id);
  return response.send('Excluido com sucesso');
});

cursosRouter.put('/:id', async (request, response) => {
  const cursosrepositorio = getRepository(Cursos);
  const { id } = request.params;
  const { curso, cargahoráriadocurso } = request.body;
  await cursosrepositorio.findOne(id);
  return response.json({ curso, cargahoráriadocurso });
});

export default cursosRouter;
