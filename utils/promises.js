// Step 1: Import fs module for file operations
import fs from "fs";

// Step 2: Function to read and parse JSON file
export async function readFile(filePath) {
  // Step 3: Read file content as string
  const data = await fs.promises.readFile(filePath, "utf-8");
  
  // Step 4: Parse and return JSON data
  return JSON.parse(data);
}

// Step 5: Function to write JSON data to file
export async function writeFile(filePath, data) {
  // Step 6: Stringify and write data to file with formatting
  await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
}