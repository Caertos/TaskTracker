// Step 1: Export help function to display available commands
export function showHelp() {
    // Step 2: Display formatted help message with all available commands
    console.log(`Available commands:
  create <description>          Create a new task with the provided description.
  update <id> <description>     Update an existing task by ID.
  mark-task <id> <status>       Mark a task as completed or pending.
  list <status>.                Show tasks depending of filter(each filter has a color) that is defined by its status.
  help                          Show this help message.`);
}