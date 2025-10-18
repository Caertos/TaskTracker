import fs from "fs";
import { filePath } from "../utils/path.js";
import { validateFile } from "../utils/fileValidator.js";
import { colors, colorize } from "../utils/colors.js";

const tasksFilePath = filePath;

export async function updateTask(taskID, taskDescription) {
  if (!taskID || !taskDescription) {
    console.error("Error: You must provide ID and description");
    return;
  }

  try {
    await validateFile();

    const data = await fs.promises.readFile(tasksFilePath, "utf-8");
    const tasks = JSON.parse(data);

    const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskID));

    if (taskIndex === -1) {
      console.error(`Error: Task with ID ${taskID} not found`);
      return;
    }

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const date = new Date().toLocaleString("en-US", { timeZone });

    tasks[taskIndex].description = taskDescription;
    tasks[taskIndex].modificationDate = date;

    await fs.promises.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
    console.log(colorize("Task updated successfully.", colors.green));
  } catch (error) {
    console.error(colorize("Error updating task:", colors.red), error);
  }
}
