import express, { NextFunction } from "express";
import todoRoute from "../routes/todos";
const app = express();

app.use("/todos", todoRoute);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);
app.listen(3000);
