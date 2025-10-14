import { getReadlineInterface } from "./utils/readline.js";
import { createTask } from "./components/createTask.js";

const rl = getReadlineInterface();

async function main() {
  console.log("Welcome to the Task Tracker!");
  let exit = false;
  while (!exit) {
    const command = await rl.question(
      "Enter a command (create, list, update, delete, exit): "
    );
    switch (command.trim().toLowerCase()) {
      case "create":
        await createTask(rl);
        break;
      case "exit":
        exit = true;
        break;
      default:
        console.log("Unknown command. Please try again.");
        break;
    }
  }
  rl.close();
}

  await main();