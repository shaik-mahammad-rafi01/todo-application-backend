import type { Request, Response } from "express";
import { addTask, deleteTaskInDb, editTaskInDb, getAllTasks } from "../services/TaskServices.js";
import type { Task } from "../types/Task.js";

export const getTask = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const task: Task = req.body;
    const newTask = await addTask(task);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
}

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.send("id is require to delete task");
  }
  try {
    const result = await deleteTaskInDb(id);
    if (!result) {
      return res.status(404).send("Task is not found");
    }
    return res.status(200).json("Task deleted");
  }
  catch (error) {
    res.status(500).send("failed to delete task")
  }
}

export const editTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedTask = req.body;
    if (!id || !updatedTask.taskName || !updatedTask.description || !updatedTask.status || !updatedTask.priority || !updatedTask.deadline) {
      return res.status(400).send("All fileds required");

    }
    const update = await editTaskInDb(id, updatedTask);
    if (!update) {
      return res.status(404).send("Task not found");
    }
    res.json(update);
  } catch (error) {
    res.status(500).send("failed to edit task");
  }

}