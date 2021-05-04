import dotenv from "dotenv"
dotenv.config()

export const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

export const MONGOOSE_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

export const MONGOOSE_TIMESTAMP = {
  createdAt: "created_at",
  updatedAt: "updated_at",
};