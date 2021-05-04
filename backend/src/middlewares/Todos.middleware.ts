import { NextFunction, Request, Response } from "express";
import Todos from "../models/Todos.models";

export const getTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await Todos.findById(req.params.todo_id);

    if (todo === null) {
      return res.status(404).json({ message: "No todo" })
    }

    (res as any).todo = todo;
    next()
    return
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Something went wrong" })
  }
}