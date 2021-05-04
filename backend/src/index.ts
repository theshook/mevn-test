import mongoose from "mongoose";
import app from "./app";
import { PORT } from "./config/app";
import { MONGOOSE_OPTIONS, MONGO_CONNECTION_STRING } from "./config/db";

const port = PORT || 3001;

app.listen(port, async () => {
  try {
    const connectionString = MONGO_CONNECTION_STRING as string;
    await mongoose.connect(connectionString, MONGOOSE_OPTIONS);
    console.log(`Connected to database...`);
    console.log(`🚀 Listening on port: ${port}`);
  } catch (err) {
    console.error(`Something went wrong: ${err}`)
  }
})
