import express from "express";

import dotenv from "dotenv";

import { connectToDB } from "./utils/db.js";

dotenv.config();
const app = express();

connectToDB();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("This route works");
});

app.listen(PORT, () => {
  console.log(`Server is running on port - ${PORT}`);
});
