import fs from "fs";
import { filePath } from "./path.js";

export async function validateFile() {
  let tasks = [];

  try {
    const data = await fs.promises.readFile(filePath, "utf-8");
    if (data.trim() === "") {
      fs.promises.writeFile(filePath, JSON.stringify(tasks, null, 2));
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      fs.promises.writeFile(filePath, JSON.stringify(tasks, null, 2));
    }
  }
}
