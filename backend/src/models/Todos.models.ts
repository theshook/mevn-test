import mongoose from 'mongoose';
import { MONGOOSE_TIMESTAMP } from '../config/db';

const todosSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, MONGOOSE_TIMESTAMP as {})

const Todos = mongoose.model("Todos", todosSchema);

export default Todos