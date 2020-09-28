import { Router } from 'express';
import SessionsAdminController from '../app/controllers/SessionsAdminController';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { matricula, password } = request.body;
    const sessionsAdminController = new SessionsAdminController();
    const { adminreg } = await sessionsAdminController.store({
      matricula,
      password,
    });
    return response.json(adminreg);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

export default sessionsRouter;
