import { Request, Response } from "express";
import TodoService from "../services/Todo.service";

const index = async (_: Request, res: Response) => {
  try {
    const result = await TodoService.index();
    res.status(200).json({ result })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
}

const create = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const result = await TodoService.create(title, description)
    res.status(200).json(result)
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err.message })
  }
}

const show = async (_: Request, res: Response) => {
  try {
    res.status(200).json((res as any).todo)
  } catch (err) {
    console.log(err)
  }
}

const update = async (req: Request, res: Response) => {
  try {
    const { title, description, completed } = req.body;
    const todo = (res as any).todo;
    const result = await TodoService.update(todo, title, description, completed);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message })
  }
}

const remove = async (_: Request, res: Response) => {
  try {
    await TodoService.remove((res as any).todo);
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message })
  }
}

export default { index, create, show, update, remove }