#!/usr/bin/env node
import { createTask } from "./components/createTask.js";
import { showHelp } from "./components/help.js";
import { updateTask } from "./components/updateTask.js";

const args = process.argv.slice(2);

async function main() {
  if (args[0] === "help" || args.length === 0) {
    showHelp();
    return;
  }

  if (args[0] === "create") {
    await createTask(args[1]); // args[1] = descripción
    return;
  }

  if (args[0] === "update") {
    updateTask(args[1], args[2]); // args[1] = id, args[2] = descripción
  }
}
await main();
