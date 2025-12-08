import "express-async-errors";
import express from "express";
import cors from "cors";
import { Request, Response } from "express";

const app = express();

app.use(express.json(), cors());

app.get("/", (req: Request, res: Response) => {
    res.send("Olá mundo!");
    return;
} );

export default app;