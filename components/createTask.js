// Step 1: Import required modules and utilities
import { filePath } from "../utils/path.js";
import { validateFile } from "../utils/fileValidator.js";
import { generateTaskID } from "../utils/taskID.js";
import { colors, colorize } from "../utils/colors.js";
import { readFile, writeFile } from "../utils/promises.js";
import { setDateFormat } from "../utils/dateFormat.js";

const tasksFilePath = filePath;

export async function createTask(taskDescription) {
  // Step 2: Validate that a description was provided
  if (!taskDescription) {
    console.error("Error: You must provide a description");
    return;
  }
  
  // Step 3: Set default task status
  const taskStatus = "pending";

  // Step 4: Ensure tasks.json file exists
  await validateFile();

  // Step 5: Get current timezone and formatted date
  const date = setDateFormat();

  try {
    // Step 6: Read existing tasks from file
    const tasks = await readFile(tasksFilePath);

    // Step 7: Generate unique ID for the new task
    const newId = generateTaskID(tasks);

    // Step 8: Create new task object with all properties
    const newTask = {
      id: newId,
      description: taskDescription,
      status: taskStatus,
      creationDate: date,
      modificationDate: null,
    };

    // Step 9: Add new task to the tasks array
    tasks.push(newTask);
    
    // Step 10: Write updated tasks array back to file
    await writeFile(tasksFilePath, tasks);
    
    // Step 11: Display success message
    console.log(colorize("Task created successfully.", colors.green));
  } catch (error) {
    // Step 12: Handle and display any errors
    console.error(colorize("Error adding task:", colors.red), error);
  }
}
