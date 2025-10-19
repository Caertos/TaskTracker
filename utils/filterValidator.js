// Step 1: Define allowed filters for listing tasks
const VALID_FILTERS = ["all", "done", "pending", "in-progress"];

// Step 2: Function to validate if a filter is valid
export function isValidFilter(filter) {
  // Step 3: Check if the filter exists in the valid filters array
  return VALID_FILTERS.includes(filter);
}

// Step 4: Function to get all valid filters (for error messages)
export function getValidFilters() {
  // Step 5: Return array of valid filters
  return VALID_FILTERS;
}