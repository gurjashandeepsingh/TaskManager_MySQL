import express from "express";
import { createTask, getTasksByOrg } from "../controllers/taskController.js";
import authenticate from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/org/:orgId/task", authenticate, createTask);
router.get("/org/:orgId/tasks", authenticate, getTasksByOrg);

export default router;
