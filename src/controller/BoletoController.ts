import { Router, Request, Response } from "express";

const route = Router();

const rotaPadrao = "/boletos";

route.get(`${rotaPadrao}/nda`, (req: Request, res: Response) => {
  res.send("SALVE PORRA!");
});

export default route;
