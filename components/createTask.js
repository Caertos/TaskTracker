import fs from "fs";
import { filePath } from "../utils/path.js";
import { validateFile } from "../utils/fileValidator.js";
import { generateTaskID } from "../utils/taskID.js";
import { colors, colorize } from "../utils/colors.js";

const tasksFilePath = filePath;

export async function createTask(taskDescription) {
  if (!taskDescription) {
    console.error("Error: You must provide a description");
    return;
  }
  const taskStatus = "pending";

  await validateFile();

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const date = new Date().toLocaleString("en-US", { timeZone });

  try {
    const data = await fs.promises.readFile(tasksFilePath, "utf-8");
    const tasks = JSON.parse(data);

    const newId = generateTaskID(tasks);

    const newTask = {
      id: newId,
      description: taskDescription,
      status: taskStatus,
      creationDate: date,
      modificationDate: null,
    };

    tasks.push(newTask);
    await fs.promises.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
    console.log(colorize("Task created successfully.", colors.green));
  } catch (error) {
    console.error(colorize("Error adding task:", colors.red), error);
  }
}
