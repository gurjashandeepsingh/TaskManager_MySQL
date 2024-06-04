import express from "express";
import { createOrg, addUserToOrg } from "../controllers/orgController.js";
import authenticate from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/org", authenticate, createOrg);
router.post("/org/:orgId/user", authenticate, addUserToOrg);

export default router;
