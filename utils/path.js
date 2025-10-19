// Step 1: Import path module for file path operations
import path from "path";

// Step 2: Get current directory path
const __dirname = path.resolve();

// Step 3: Create absolute path to tasks.json file
const filePath = path.join(__dirname, "tasks.json");

// Step 4: Export the file path for use in other modules
export { filePath };