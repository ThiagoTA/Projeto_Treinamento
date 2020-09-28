/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';

import FuncionariosController from '../app/controllers/FuncionariosController';
import Funcionarios from '../app/models/Funcionarios';

const funcionariosRouter = Router();

funcionariosRouter.post('/', async (request, response) => {
  try {
    const {
      nome_funcionario,
      email_funcionario,
      foto_funcionario,
    } = request.body;

    const funcionariosController = new FuncionariosController();

    const funcionarioreg = await funcionariosController.store({
      nome_funcionario,
      email_funcionario,
      foto_funcionario,
    });

    return response.json(funcionarioreg);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

funcionariosRouter.get('/', async (request, reponse) => {
  const funcionariorepositorio = getRepository(Funcionarios);
  const funcionariosreg = await funcionariorepositorio.find();
  return reponse.json(funcionariosreg);
});

funcionariosRouter.get('/:id', async (request, response) => {
  const funcionariorepositorio = getRepository(Funcionarios);
  const { id } = request.params;
  const funcionariosreg = await funcionariorepositorio.findOne(id);
  return response.json(funcionariosreg);
});

funcionariosRouter.delete('/:id', async (request, response) => {
  const funcionariorepositorio = getRepository(Funcionarios);
  const { id } = request.params;
  await funcionariorepositorio.delete(id);
  return response.send('Excluido com sucesso');
});

funcionariosRouter.put('/:id', async (request, response) => {
  const funcionariorepositorio = getRepository(Funcionarios);
  const { id } = request.params;
  const {
    nome_funcionario,
    email_funcionario,
    foto_funcionario,
  } = request.body;
  await funcionariorepositorio.findOne(id);
  return response.json({
    nome_funcionario,
    email_funcionario,
    foto_funcionario,
  });
});

export default funcionariosRouter;
