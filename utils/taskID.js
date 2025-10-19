// Step 1: Function to generate unique task ID
export function generateTaskID(tasks) {
    // Step 2: Check if tasks array is empty or doesn't exist
    if (!tasks || tasks.length === 0) {
        // Step 3: Return 1 as the first ID
        return 1;
    }
    
    // Step 4: If tasks exist, generate next ID
    if (tasks && tasks.length > 0) {
        // Step 5: Extract all existing IDs from tasks
        const ids = tasks.map(task => task.id);
        
        // Step 6: Find the maximum ID and increment by 1
        return Math.max(...ids) + 1;
    }
}