import express from "express";
import path from "path";
import { portfolioData } from "./data/portfolio";

const app = express();
const port = Number(process.env.PORT) || 3000;

const publicDir = path.join(__dirname, "..", "public");

app.use(express.static(publicDir));

app.get("/api/portfolio", (_req, res) => {
  res.json(portfolioData);
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, () => {
  console.log(`Portfolio site running at http://localhost:${port}`);
});
