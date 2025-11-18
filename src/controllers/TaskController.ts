import type { Request, Response } from "express";
import { addTask, getAllTasks } from "../services/TaskServices.js";
import type { Task } from "../types/Task.js";

export const getTask = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({error : "Failed to fetch tasks" });
  }
};

export const createTask = async (req: Request, res: Response) => {
    const task:Task = req.body;
    await addTask(task);
    res.send("Task added successfully");
}