import express, { Router } from "express";
import { createTask, getTask } from "../controllers/TaskController.js";
const taskRouter = Router();

taskRouter.get("/task" , getTask)
taskRouter.post("/task" , createTask)

export default taskRouter;