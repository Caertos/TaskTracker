// Step 1: Import required modules
import fs from "fs";
import { filePath } from "./path.js";

const tasksFilePath = filePath;

// Step 2: Function to find task index by ID
export async function SelectedIndex(taskID) {
  // Step 3: Read tasks from file
  const data = await fs.promises.readFile(tasksFilePath, "utf-8");
  
  // Step 4: Parse JSON data to get tasks array
  const tasks = JSON.parse(data);
  
  // Step 5: Find the index of the task with matching ID
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskID));
  
  // Step 6: Return both the index and the tasks array
  return { taskIndex, tasks };
}

// Step 7: Function to validate if task index exists
export function isValidIndex(taskIndex, taskID) {
  // Step 8: Check if task was not found (index === -1)
  if (taskIndex === -1) {
    console.error(`Error: Task with ID ${taskID} not found`);
    return false;
  }
  
  // Step 9: Return true if task exists
  return true;
}
