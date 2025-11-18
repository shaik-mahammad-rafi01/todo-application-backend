import { db } from "../config/dbConfig.js";
import type { Task } from "../types/Task.js";

const taskCollection = db.collection("Tasks");

export const getAllTasks = async () => {
    const items = await taskCollection.get();
    return items.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};