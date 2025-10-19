// Step 1: Import required modules and utilities
import { filePath } from "../utils/path.js";
import { validateFile } from "../utils/fileValidator.js";
import { colors, colorize } from "../utils/colors.js";
import { SelectedIndex, isValidIndex } from "../utils/indexSelector.js";
import { setDateFormat } from "../utils/dateFormat.js";
import { writeFile } from "../utils/promises.js";

const tasksFilePath = filePath;

export async function updateTask(taskID, taskDescription) {
  // Step 2: Validate that both ID and description were provided
  if (!taskID || !taskDescription) {
    console.error(colorize("Error: You must provide ID and description", colors.red));
    return;
  }

  try {
    // Step 3: Ensure tasks.json file exists
    await validateFile();

    // Step 4: Find the task index and get all tasks
    const { taskIndex, tasks } = await SelectedIndex(taskID);

    // Step 5: Validate that the task exists
    if (!isValidIndex(taskIndex, taskID)) {
      return;
    }

    // Step 6: Get current timezone and formatted date
    const date = setDateFormat();

    // Step 7: Update task description
    tasks[taskIndex].description = taskDescription;
    
    // Step 8: Update modification date
    tasks[taskIndex].modificationDate = date;

    // Step 9: Write updated tasks array back to file
    await writeFile(tasksFilePath, tasks);
    
    // Step 10: Display success message
    console.log(colorize("Task updated successfully.", colors.green));
  } catch (error) {
    // Step 11: Handle and display any errors
    console.error(colorize("Error updating task:", colors.red), error);
  }
}
