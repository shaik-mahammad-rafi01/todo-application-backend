import express, { Router } from "express";
import { createTask, deleteTask, getTask, putExpense } from "../controllers/TaskController.js";
const taskRouter = Router();

taskRouter.get("/task" , getTask)
taskRouter.post("/task" , createTask)
taskRouter.delete("/task/:id" , deleteTask)
taskRouter.put("/task/:id", putExpense)

export default taskRouter;