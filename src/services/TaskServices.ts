import { db } from "../config/dbConfig.js";
import type { Task } from "../types/Task.js";

const taskCollection = db.collection("Tasks");

export const addTask = async (task:Task) => {
    const newTask = await taskCollection.add(task);
    return { id: newTask.id, ...task };
};

export const getAllTasks = async () => {
    const items = await taskCollection.get();
    return items.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const deleteTaskInDb = async(taskId : string)=>{
    const id = taskId;
    console.log(id)
    return await taskCollection.doc(id).delete()
}

export const editTaskInDb = async(id:string, data : Task)=>{
    const taskReference = taskCollection.doc(id);
    const task = await taskReference.get()

    if(!task.exists){
        return null
    }
    await taskReference.update(data)
    const updatedTask = await taskReference.get();
    return {id , ...updatedTask.data()}
}