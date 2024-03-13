import express from "express";
import route from "./controller/BoletoController";

const app = express();

app.use(route);

export default app;
