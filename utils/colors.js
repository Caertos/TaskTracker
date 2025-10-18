export const colors = {
  reset: '\x1b[0m',

  red: '\x1b[31m',
  green: '\x1b[32m'
};

export function colorize(text, color) {
  return `${color}${text}${colors.reset}`;
}