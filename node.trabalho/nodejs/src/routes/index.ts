import { Router } from 'express';

import cursosRouter from './cursos.routes';
import funcionariosRouter from './funcionarios.routes';
import treinamentosRouter from './treinamentos.routes';
import adminRouter from './admin.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/cursos', cursosRouter);

routes.use('/funcionarios', funcionariosRouter);

routes.use('/treinamentos', treinamentosRouter);

routes.use('/admin', adminRouter);

routes.use('/sessions', sessionsRouter);

export default routes;
