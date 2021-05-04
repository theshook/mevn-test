import { Router } from 'express';
import todoRoutes from './todos.routes';

const routes = Router();

routes.use("/todos", todoRoutes);

export default routes;