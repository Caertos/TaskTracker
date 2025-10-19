// Step 1: Define ANSI color codes for terminal output
export const colors = {
  reset: '\x1b[0m',   // Reset to default color
  red: '\x1b[31m',    // Red color for errors
  green: '\x1b[32m',   // Green color for success messages
  yellow: '\x1b[33m',  // Yellow color for warnings

  blue: '\x1b[34m',    // Blue color for done tasks
  magenta: '\x1b[35m', // Magenta color for in-progress tasks
  orange: '\x1b[38;5;208m' // Orange color for pending tasks
};

// Step 2: Function to apply color to text
export function colorize(text, color) {
  // Step 3: Wrap text with color code and reset code
  return `${color}${text}${colors.reset}`;
}