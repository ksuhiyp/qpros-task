import express, { Express } from "express";
import dotenv from "dotenv";
import { google } from "./script.js";

const app: Express = express();
dotenv.config();

app.get("/", async (req, res) => {
  try {
    await google();
    res.send("selenium-webdriver script executed successfully");
  } catch (error) {
    console.error("selenium script failed:\n", error);
    res.sendStatus(500).json({ error });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`)
);
