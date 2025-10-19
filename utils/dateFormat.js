// Step 1: Function to get formatted date with timezone
export function setDateFormat() {
  // Step 2: Get current system timezone
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  // Step 3: Create formatted date string with timezone
  const date = new Date().toLocaleString("en-US", { timeZone });
  
  // Step 4: Return formatted date
  return date;
}