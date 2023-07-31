import express from "express";

import { getAllUsers } from "../../controllers/user/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);

export default router;