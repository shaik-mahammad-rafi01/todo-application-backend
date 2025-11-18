import type { Request, Response } from "express";
import { getAllTasks } from "../services/TaskServices.js";


export const getTask = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({error : "Failed to fetch tasks" });
  }
};