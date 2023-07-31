import express from "express";

import dotenv from "dotenv";

import { errorHandler, notFound } from "./middlewares/errorHandler.js";
import { connectToDB } from "./utils/db.js";
import userRoute from "./routes/user/user.route.js";

dotenv.config();
const app = express();

connectToDB();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/api", (req, res) => {
  res.send("This route works");
});

//user related

app.use("/api/users", userRoute);

//invoice related
// app.use("/api/invoices");

//custom middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port - ${PORT}`);
});
