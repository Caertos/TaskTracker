// Step 1: Import required modules
import fs from "fs";
import { filePath } from "./path.js";

// Step 2: Function to validate and initialize tasks.json file
export async function validateFile() {
  // Step 3: Initialize empty tasks array
  let tasks = [];

  try {
    // Step 4: Try to read the tasks file
    const data = await fs.promises.readFile(filePath, "utf-8");
    
    // Step 5: Check if file is empty
    if (data.trim() === "") {
      // Step 6: Initialize file with empty array if empty
      fs.promises.writeFile(filePath, JSON.stringify(tasks, null, 2));
    }
  } catch (error) {
    // Step 7: Handle file not found error
    if (error.code === "ENOENT") {
      // Step 8: Create file with empty array if it doesn't exist
      fs.promises.writeFile(filePath, JSON.stringify(tasks, null, 2));
    }
  }
}
