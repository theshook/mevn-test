import { Router } from 'express';
import { getTodo } from '../middlewares/Todos.middleware';
import TodosController from '../controllers/Todos.controller';

const todoRoutes: Router = Router();

todoRoutes.get("/", TodosController.index);
todoRoutes.post("/", TodosController.create);
todoRoutes.get("/:todo_id", getTodo, TodosController.show);
todoRoutes.put("/:todo_id", getTodo, TodosController.update);
todoRoutes.delete("/:todo_id", getTodo, TodosController.remove);

export default todoRoutes;