import express from "express";
import { Router, Request, Response } from "express";

const app = express();

const route = Router();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(route);

app.listen(3333, () => "server running on port 3333");
