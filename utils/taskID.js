export function generateTaskID(tasks) {
    if (!tasks || tasks.length === 0) {
        return 1;
    }
    if (tasks && tasks.length > 0) {
        const ids = tasks.map(task => task.id);
        return Math.max(...ids) + 1;
    }
}