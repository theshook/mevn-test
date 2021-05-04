import express, { Application } from "express";
import morgan from 'morgan';
import routes from "./routes";

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use(routes);

export default app;