# Task Tracker CLI

A simple command-line interface (CLI) task tracking application built with Node.js.

## 📋 Description

Task Tracker is a lightweight CLI tool that allows you to create, update, and manage tasks directly from your terminal. All tasks are stored in a local JSON file.

## 🚀 Installation

### Local Usage
```bash
# Clone the repository
git clone https://github.com/Caertos/TaskTracker.git
cd TaskTracker

# Run commands
node index.js <command> [arguments]
```

### Global Installation

Install the CLI tool globally to use it from anywhere on your system:

```bash
# Navigate to the project directory
cd TaskTracker

# Install globally
npm install -g .
```

**Alternative: Using npm link (for development)**
```bash
# Inside the project directory
npm link
```

**Verify installation:**
```bash
# Check if the command is available
task-cli help
```

**Uninstall:**
```bash
# If installed with npm install -g
npm uninstall -g task-tracker

# If installed with npm link
npm unlink -g task-tracker
```

## 📖 Usage

### Local Usage (from project directory)

```bash
# Show help
node index.js help

# Create a new task
node index.js create "Task description"

# Update an existing task
node index.js update <id> "New description"

# Mark task status
node index.js mark-task <id> <status>

# List tasks
node index.js list <filter>
```

### Global Usage (after global installation)

Once installed globally, you can use the `task-cli` command from anywhere:

```bash
# Show help
task-cli help

# Create a new task
task-cli create "Task description"

# Update an existing task
task-cli update <id> "New description"

# Mark task status
task-cli mark-task <id> <status>

# List tasks
task-cli list <filter>
```

### Examples

**Local usage:**
```bash
# Create a task
node index.js create "Buy groceries"

# Update task with ID 1
node index.js update 1 "Buy groceries and cook dinner"

# Mark task as in-progress
node index.js mark-task 1 in-progress

# Mark task as done
node index.js mark-task 1 done

# List all tasks
node index.js list all

# List only pending tasks
node index.js list pending

# List only in-progress tasks
node index.js list in-progress

# List only completed tasks
node index.js list done

# Show help
node index.js help
```

**Global usage:**
```bash
# Create a task (from anywhere)
task-cli create "Buy groceries"

# Update task with ID 1 (from anywhere)
task-cli update 1 "Buy groceries and cook dinner"

# Mark task as done (from anywhere)
task-cli mark-task 1 done

# List all tasks (from anywhere)
task-cli list all

# Show help (from anywhere)
task-cli help
```

> **Note:** When using the global command, tasks are stored in the directory where you execute the command.

## 📁 Project Structure

```
TaskTracker/
├── index.js                 # Main entry point
├── package.json             # Project configuration
├── tasks.json              # Task storage (auto-generated)
├── README.md               # Project documentation
├── components/             # Core components
│   ├── createTask.js       # Task creation logic
│   ├── updateTask.js       # Task update logic
│   ├── markTask.js         # Task status update logic
│   ├── listTask.js         # Task listing and filtering logic
│   └── help.js            # Help command
└── utils/                 # Utility functions
    ├── colors.js          # Terminal color helpers
    ├── dateFormat.js      # Date formatting utilities
    ├── fileValidator.js   # File validation
    ├── filterValidator.js # List filter validation
    ├── indexSelector.js   # Task index finder
    ├── path.js           # Path configuration
    ├── promises.js       # File I/O promises wrapper
    ├── statusValidator.js # Status validation
    └── taskID.js         # ID generation
```

## 🔧 Core Components

### Main Entry Point
- **[`index.js`](./index.js)** - Main application file, handles command routing

### Components

#### [`createTask(taskDescription)`](./components/createTask.js#L10-L56)
Creates a new task with the provided description.

**Location:** [`components/createTask.js`](./components/createTask.js)

**Parameters:**
- `taskDescription` (string): The task description

**Features:**
- Validates task description
- Auto-generates unique task ID
- Adds creation timestamp with timezone
- Sets default status as "pending"
- Saves to JSON file
- [View source code](./components/createTask.js#L10-L56)

---

#### [`updateTask(taskID, taskDescription)`](./components/updateTask.js#L10-L47)
Updates an existing task by ID.

**Location:** [`components/updateTask.js`](./components/updateTask.js)

**Parameters:**
- `taskID` (number): The ID of the task to update
- `taskDescription` (string): The new task description

**Features:**
- Validates task ID and description
- Finds task by ID
- Updates description and modification timestamp
- [View source code](./components/updateTask.js#L10-L47)

---

#### [`markTask(taskID, status)`](./components/markTask.js#L12-L54)
Updates the status of an existing task.

**Location:** [`components/markTask.js`](./components/markTask.js)

**Parameters:**
- `taskID` (number): The ID of the task to update
- `status` (string): New status (pending, in-progress, or done)

**Features:**
- Validates task ID and status
- Ensures status is one of: pending, in-progress, done
- Updates status and modification timestamp
- [View source code](./components/markTask.js#L12-L54)

---

#### [`listTasks(filter)`](./components/listTask.js#L24-L69)
Lists tasks based on filter criteria with color-coded output.

**Location:** [`components/listTask.js`](./components/listTask.js)

**Parameters:**
- `filter` (string): Filter type (all, pending, in-progress, or done)

**Features:**
- Validates filter type
- Filters tasks by status
- Color-coded output based on task status:
  - 🔵 Blue for done tasks
  - 🟣 Magenta for in-progress tasks
  - 🟠 Orange for pending tasks
- Formatted output with separators
- [View source code](./components/listTask.js#L24-L69)

---

#### [`showHelp()`](./components/help.js#L1-L8)
Displays available commands and usage information.

**Location:** [`components/help.js`](./components/help.js)

[View source code](./components/help.js#L1-L8)

---

## 🛠️ Utility Functions

### [`colors.js`](./utils/colors.js)
Terminal color utilities for styled console output.

**Exports:**
- [`colors`](./utils/colors.js#L1-L9) - Color code constants (red, green, yellow, blue, magenta, orange, reset)
- [`colorize(text, color)`](./utils/colors.js#L11-L14) - Apply color to text

---

### [`dateFormat.js`](./utils/dateFormat.js)
Date formatting with timezone support.

**Function:** [`setDateFormat()`](./utils/dateFormat.js#L1-L9)
- Gets current system timezone
- Returns formatted date string
- [View source code](./utils/dateFormat.js#L1-L9)

---

### [`fileValidator.js`](./utils/fileValidator.js)
File validation and initialization.

**Function:** [`validateFile()`](./utils/fileValidator.js#L4-L20)
- Checks if tasks.json exists
- Creates file if missing
- Initializes with empty array if empty
- [View source code](./utils/fileValidator.js#L4-L20)

---

### [`filterValidator.js`](./utils/filterValidator.js)
List filter validation.

**Functions:**
- [`isValidFilter(filter)`](./utils/filterValidator.js#L4-L7) - Validates filter type
- [`getValidFilters()`](./utils/filterValidator.js#L10-L13) - Returns valid filter options
- [View source code](./utils/filterValidator.js)

---

### [`indexSelector.js`](./utils/indexSelector.js)
Task index finder and validator.

**Functions:**
- [`SelectedIndex(taskID)`](./utils/indexSelector.js#L6-L16) - Finds task index by ID
- [`isValidIndex(taskIndex, taskID)`](./utils/indexSelector.js#L19-L27) - Validates task exists
- [View source code](./utils/indexSelector.js)

---

### [`promises.js`](./utils/promises.js)
File I/O promises wrapper for JSON operations.

**Functions:**
- [`readFile(filePath)`](./utils/promises.js#L4-L10) - Reads and parses JSON file
- [`writeFile(filePath, data)`](./utils/promises.js#L13-L16) - Writes JSON data to file
- [View source code](./utils/promises.js)

---

### [`statusValidator.js`](./utils/statusValidator.js)
Task status validation.

**Functions:**
- [`isValidStatus(status)`](./utils/statusValidator.js#L4-L7) - Validates status value
- [`getValidStatuses()`](./utils/statusValidator.js#L10-L13) - Returns valid status options
- Valid statuses: pending, in-progress, done
- [View source code](./utils/statusValidator.js)

---

### [`taskID.js`](./utils/taskID.js)
Task ID generation logic.

**Function:** [`generateTaskID(tasks)`](./utils/taskID.js#L1-L13)
- Generates unique sequential IDs
- Handles empty task lists
- Finds maximum ID and increments
- [View source code](./utils/taskID.js#L1-L13)

---

### [`path.js`](./utils/path.js)
Path configuration for task storage.

**Exports:**
- [`filePath`](./utils/path.js#L3-L8) - Absolute path to tasks.json

---

## 📦 Task Data Structure

Each task is stored with the following structure:

```json
{
  "id": 1,
  "description": "Task description",
  "status": "pending",
  "creationDate": "10/18/2025, 12:00:00 PM",
  "modificationDate": null
}
```

**Fields:**
- `id` (number): Unique task identifier
- `description` (string): Task description
- `status` (string): Task status (default: "pending")
- `creationDate` (string): Timestamp when task was created
- `modificationDate` (string|null): Timestamp of last modification

## 🎨 Features

- ✅ Create tasks with automatic ID generation
- ✅ Update task descriptions
- ✅ Mark task status (pending, in-progress, done)
- ✅ List tasks with filtering options
- ✅ Color-coded output based on task status
- ✅ Automatic timezone detection
- ✅ Formatted task display with separators
- ✅ JSON file storage
- ✅ Input validation for all commands
- ✅ Status and filter validation
- ✅ Error handling with colored messages
- ✅ Help command
- ✅ Step-by-step code comments

## 🔍 Technical Details

- **Language:** JavaScript (ES Modules)
- **Runtime:** Node.js
- **Storage:** Local JSON file
- **Dependencies:** None (pure Node.js)

## 📝 License

ISC

## 👤 Author

Carlos Cochero

---

## 🔗 Quick Links to Source Code

### Main Files
- [Main Entry Point](./index.js)
- [Package Configuration](./package.json)

### Components
- [Create Task Implementation](./components/createTask.js)
- [Update Task Implementation](./components/updateTask.js)
- [Mark Task Implementation](./components/markTask.js)
- [List Tasks Implementation](./components/listTask.js)
- [Help Command](./components/help.js)

### Utilities
- [Color Utilities](./utils/colors.js)
- [Date Format](./utils/dateFormat.js)
- [File Validator](./utils/fileValidator.js)
- [Filter Validator](./utils/filterValidator.js)
- [Index Selector](./utils/indexSelector.js)
- [Promises Wrapper](./utils/promises.js)
- [Status Validator](./utils/statusValidator.js)
- [Task ID Generator](./utils/taskID.js)
- [Path Configuration](./utils/path.js)

## 🎨 Color Scheme

The application uses different colors for different task statuses:

| Status | Color | Code |
|--------|-------|------|
| Done | 🔵 Blue | `\x1b[34m` |
| In Progress | 🟣 Magenta | `\x1b[35m` |
| Pending | 🟠 Orange | `\x1b[38;5;208m` |
| Success | 🟢 Green | `\x1b[32m` |
| Error | 🔴 Red | `\x1b[31m` |
| Warning | 🟡 Yellow | `\x1b[33m` |

## 📋 Task Output Format

When listing tasks, they are displayed in the following format:

```
===========================
ID: 1
Description: Buy groceries
Status: pending
Created: 10/18/2025, 7:33:56 PM
Modified: N/A
===========================
```
