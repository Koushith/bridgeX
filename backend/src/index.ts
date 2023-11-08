import express from "express";

import dotenv from "dotenv";

import cors from "cors";

import admin from "firebase-admin";

// import * as serviceAccount from './firebase/firebase-service.json'
import { errorHandler, notFound } from "./middlewares/errorHandler.js";
import { connectToDB } from "./utils/db.js";
import invoiceRoute from "./routes/invoice/invoice.route.js";
import userRoutes from "./routes/user/user.route.js";
import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";



dotenv.config();
const app = express();
initializeApp();

// const firebaseAuth = getAuth()

connectToDB();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/api", (req, res) => {
  res.send("This route works");
});

//user related

app.use("/api/users", userRoutes);

//invoice related
app.use("/api/invoices", invoiceRoute);

//custom middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port - ${PORT}`);
});
