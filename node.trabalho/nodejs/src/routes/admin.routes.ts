import { Router } from 'express';
import { getRepository } from 'typeorm';

import AdminController from '../app/controllers/AdminController';
import Admin from '../app/models/Admin';

const adminRouter = Router();

adminRouter.post('/', async (request, response) => {
  try {
    const { matricula, password } = request.body;

    const adminController = new AdminController();

    const adminreg = await adminController.store({
      matricula,
      password,
    });

    return response.json(adminreg);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

adminRouter.get('/', async (request, response) => {
  const adminrepositorio = getRepository(Admin);
  const adminreg = await adminrepositorio.find();
  return response.json(adminreg);
});

adminRouter.get('/:id', async (request, response) => {
  const adminrepositorio = getRepository(Admin);
  const { id } = request.params;
  const adminreg = await adminrepositorio.findOne(id);
  return response.json(adminreg);
});

adminRouter.delete('/:id', async (request, response) => {
  const adminrepositorio = getRepository(Admin);
  const { id } = request.params;
  await adminrepositorio.delete(id);
  return response.send('Excluido com sucesso');
});

export default adminRouter;
