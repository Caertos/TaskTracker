// Step 1: Define allowed task statuses
const VALID_STATUSES = ["pending", "in-progress", "done"];

// Step 2: Function to validate if a status is valid
export function isValidStatus(status) {
  // Step 3: Check if the status exists in the valid statuses array
  return VALID_STATUSES.includes(status);
}

// Step 4: Function to get all valid statuses (for error messages)
export function getValidStatuses() {
  // Step 5: Return array of valid statuses
  return VALID_STATUSES;
}
