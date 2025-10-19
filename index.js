#!/usr/bin/env node
// Step 1: Import required components and utilities
import { createTask } from "./components/createTask.js";
import { showHelp } from "./components/help.js";
import { updateTask } from "./components/updateTask.js";
import { markTask } from "./components/markTask.js";
import { listTasks } from "./components/listTask.js";
import { colors, colorize } from "./utils/colors.js";

// Step 2: Extract command-line arguments (excluding node and script path)
const args = process.argv.slice(2);

// Step 3: Define main function to handle command routing
async function main() {
  // Step 4: Check if help command or no arguments provided
  if (args[0] === "help" || args.length === 0) {
    showHelp();
    return;
  }

  // Step 5: Handle create command
  if (args[0] === "create") {
    // Call createTask with provided description
    await createTask(args[1]); // args[1] = task description
    return;
  }

  // Step 6: Handle update command
  if (args[0] === "update") {
    // Call updateTask with provided ID and description
    updateTask(args[1], args[2]); // args[1] = task ID, args[2] = new description
    return;
  }

  // Step 7: Handle mark-task command
  if (args[0] === "mark-task" && args[1] && args[2]) {
    // Call markTask with provided ID and status
    await markTask(args[1], args[2]); // args[1] = task ID, args[2] = status
    return;
  }

  // Step 8: Handle list command
  if (args[0] === "list" && args[1]) {
    await listTasks(args[1]); // args[1] = status
    return;
  }

  // Step 9: Show error for unknown commands
  console.error(colorize("Error: Unknown command. Use 'help' to see available commands.", colors.red));
}

// Step 9: Execute main function
await main();
