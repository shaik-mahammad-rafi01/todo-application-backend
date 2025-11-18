import express, { Router } from "express";
import {  getTask } from "../controllers/TaskController.js";
const taskRouter = Router();

taskRouter.get("/task" , getTask)

export default taskRouter;