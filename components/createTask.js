import fs from "fs";
import { filePath } from "../utils/path.js";
import { validateFile } from "../utils/fileValidator.js";

const tasksFilePath = filePath;



export async function createTask(rl) {
  const taskName = await rl.question("Enter task name: ");
  const taskDescription = await rl.question("Enter task description: ");
  const taskStatus = "pending";

  await validateFile();

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const date = new Date().toLocaleString("en-US", { timeZone });

  const newTask = {
    name: taskName,
    description: taskDescription,
    status: taskStatus,
    creationDate: date,
    modificationDate: null,
  };

  try {
    const data = await fs.promises.readFile(tasksFilePath, "utf-8");
    const tasks = JSON.parse(data);
    tasks.push(newTask);
    await fs.promises.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
    console.log("Task added successfully.");
  } catch (error) {
    console.error("Error adding task:", error);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { getReadlineInterface } = await import("../utils/readline.js");
  const rl = getReadlineInterface();
  await createTask(rl);
  rl.close();
}