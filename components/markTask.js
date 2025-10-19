// Step 1: Import required modules and utilities
import { filePath } from "../utils/path.js";
import { validateFile } from "../utils/fileValidator.js";
import { colors, colorize } from "../utils/colors.js";
import { SelectedIndex, isValidIndex } from "../utils/indexSelector.js";
import { setDateFormat } from "../utils/dateFormat.js";
import { writeFile } from "../utils/promises.js";
import { isValidStatus, getValidStatuses } from "../utils/statusValidator.js";

const tasksFilePath = filePath;

export async function markTask(taskID, status) {
  // Step 2: Validate that both task ID and status were provided
  if (!taskID || !status) {
    console.error(colorize("Error: You must provide task ID and status", colors.red));
    return;
  }

  // Step 3: Validate that the status is one of the allowed values
  if (!isValidStatus(status)) {
    const validStatuses = getValidStatuses().join(", ");
    console.error(colorize(`Error: Invalid status. Allowed values: ${validStatuses}`, colors.red));
    return;
  }

  try {
    // Step 4: Ensure tasks.json file exists
    await validateFile();
    
    // Step 5: Find the task index and get all tasks
    const { taskIndex, tasks } = await SelectedIndex(taskID);

    // Step 6: Validate that the task exists
    if (!isValidIndex(taskIndex, taskID)) {
      return;
    }

    // Step 7: Get current timezone and formatted date
    const date = setDateFormat();

    // Step 8: Update task status
    tasks[taskIndex].status = status;
    
    // Step 9: Update modification date
    tasks[taskIndex].modificationDate = date;

    // Step 10: Write updated tasks array back to file
    await writeFile(tasksFilePath, tasks);

    // Step 11: Display success message
    console.log(colorize("Task status updated successfully.", colors.green));

  } catch (error) {
    // Step 12: Handle and display any errors
    console.error(colorize("Error updating task status:", colors.red), error);
  }
}
