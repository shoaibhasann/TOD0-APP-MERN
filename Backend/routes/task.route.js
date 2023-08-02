import { Router } from "express";
import isLoggedIn from "../middlewares/auth.middleware.js";
import { createTask, deleteTask, getMyTask, updateTask } from "../controllers/task.controllers.js";

const router = Router();

router.post('/', isLoggedIn, createTask );
router.get('/', isLoggedIn, getMyTask);
router.put('/:id', isLoggedIn, updateTask);
router.delete('/:id', isLoggedIn, deleteTask);

export default router;