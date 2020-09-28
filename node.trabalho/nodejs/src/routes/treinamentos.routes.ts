/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import TreinamentosController from '../app/controllers/TreinamentosController';
import Treinamentos from '../app/models/Treinamentos';

const treinamentosRouter = Router();

treinamentosRouter.post('/', async (request, response) => {
  try {
    const {
      id_funcionario,
      id_curso,
      data_treinamento,
      vencimento_treinamento,
    } = request.body;
    const treinamentosController = new TreinamentosController();
    const treinamento = await treinamentosController.store({
      id_funcionario,
      id_curso,
      data_treinamento,
      vencimento_treinamento,
    });
    return response.json(treinamento);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

treinamentosRouter.get('/', async (request, reponse) => {
  const treinamentosrepositorio = getRepository(Treinamentos);
  const treinamentosreg = await treinamentosrepositorio.find();
  return reponse.json(treinamentosreg);
});

treinamentosRouter.get('/:id', async (request, response) => {
  const treinamentosrepositorio = getRepository(Treinamentos);
  const { id } = request.params;
  const treinamentosreg = await treinamentosrepositorio.findOne(id);
  return response.json(treinamentosreg);
});

treinamentosRouter.delete('/:id', async (request, response) => {
  const treinamentosrepositorio = getRepository(Treinamentos);
  const { id } = request.params;
  await treinamentosrepositorio.delete(id);
  return response.send('Excluido com sucesso');
});

treinamentosRouter.put('/:id', async (request, response) => {
  const treinamentosrepositorio = getRepository(Treinamentos);
  const { id } = request.params;
  const treinamentosreg = await treinamentosrepositorio.findOne(id);
  return response.json(treinamentosreg);
});

treinamentosRouter.put('/:id', async (request, response) => {
  const treinamentosrepositorio = getRepository(Treinamentos);
  const { id } = request.params;
  const {
    id_funcionario,
    id_curso,
    data_treinamento,
    vencimento_treinamento,
  } = request.body;
  await treinamentosrepositorio.findOne(id);
  return response.json({
    id_funcionario,
    id_curso,
    data_treinamento,
    vencimento_treinamento,
  });
});

export default treinamentosRouter;
