import express from "express";
import { getUserOrganizations } from "../controllers/userController.js";
import authenticate from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/user/orgs", authenticate, getUserOrganizations);

export default router;
