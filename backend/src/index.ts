import express from "express";

import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("This route works");
});

app.listen(PORT, () => {
  console.log(`Server is running on port - ${PORT}`);
});
