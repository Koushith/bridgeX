import express from "express";
import { getAllInvoices } from "../../controllers/invoice/invoice.controller.js";

const router = express.Router();

router.route("/").get(getAllInvoices);

export default router;
