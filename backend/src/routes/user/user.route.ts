import express from "express";

import { authUser, getAllUsers } from "../../controllers/user/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/auth").post(authUser);

export default router;
