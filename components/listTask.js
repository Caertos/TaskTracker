// Step 1: Import required modules and utilities
import { isValidFilter, getValidFilters } from "../utils/filterValidator.js";
import { filePath } from "../utils/path.js";
import { validateFile } from "../utils/fileValidator.js";
import { colors, colorize } from "../utils/colors.js";
import { readFile } from "../utils/promises.js";

const tasksFilePath = filePath;

// Step 2: Function to get color based on task status
function getStatusColor(status) {
  // Step 3: Assign color based on status
  switch (status) {
    case "done":
      return colors.blue; // Blue for completed tasks
    case "in-progress":
      return colors.magenta; // Magenta for in-progress tasks
    case "pending":
      return colors.orange; // Orange for pending tasks
    default:
      return colors.reset; // Default color
  }
}

export async function listTasks(filter) {
  // Step 4: Validate the filter
  if (!isValidFilter(filter)) {
    console.error(
      colorize(
        `Error: Invalid filter. Allowed values: ${getValidFilters().join(
          ", "
        )}`,
        colors.red
      )
    );
    return;
  }

  try {
    // Step 5: Ensure tasks.json file exists
    await validateFile();

    // Step 6: Read all tasks from file
    const tasks = await readFile(tasksFilePath);

    // Step 7: Filter tasks based on the provided filter
    let filteredTasks;
    if (filter === "all") {
      filteredTasks = tasks;
    } else {
      filteredTasks = tasks.filter((task) => task.status === filter);
    }

    // Step 8: Display the filtered tasks
    if (filteredTasks.length === 0) {
      console.log(
        colorize("No tasks found for the specified filter.", colors.yellow)
      );
    } else {
      filteredTasks.forEach((task) => {
        // Step 9: Get color for current task status
        const statusColor = getStatusColor(task.status);

        // Step 10: Format task output with organized structure
        const separator = "===========================";
        const taskInfo = `${separator}
        ID: ${task.id}
        Description: ${task.description}
        Status: ${task.status}
        Created: ${task.creationDate}
        Modified: ${task.modificationDate || "N/A"}
        ${separator}`;

        // Step 11: Print task with status-specific color
        console.log(colorize(taskInfo, statusColor));
      });
    }
  } catch (error) {
    // Step 12: Handle and display any errors
    console.error(colorize(`Error: ${error.message}`, colors.red));
  }
}
