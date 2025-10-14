import { createInterface } from "readline/promises";

export function getReadlineInterface() {
  return createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}
