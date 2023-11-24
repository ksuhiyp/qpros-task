import express, { Express } from "express";
import dotenv from "dotenv";
import { google } from "./script.js";
import cors from "cors";
const app: Express = express();
dotenv.config();

app.get("/", cors(), async (_, res) => {
  try {
    const result = await google();
    res.status(200).json({ result });
  } catch (error) {
    console.error("selenium script failed:\n", error);
    res.sendStatus(500).json({ error });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`)
);
