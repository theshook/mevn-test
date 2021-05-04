import { Document } from "mongoose";
import Todos from "../models/Todos.models";

const index = async () => {
  try {
    const todos = await Todos.find();
    return todos;
  } catch (err) {
    return err
  }
}

const create = async (title: string, description: string) => {
  try {
    const todo = new Todos({ title, description })
    return await todo.save();
  } catch (err) {
    return err
  }
}

const update = async (todo: Document<any, {}>, title: string, description: string, completed: boolean) => {
  try {
    Object.assign(todo, { title, description, completed })
    return await todo.save();
  } catch (err) {
    return err
  }
}

const remove = async (todo: Document<any, {}>) => {
  try {
    return await todo.remove();
  } catch (err) {
    return err
  }
}

export default { index, create, update, remove }