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
```

### Examples

**Local usage:**
```bash
# Create a task
node index.js create "Buy groceries"

# Update task with ID 1
node index.js update 1 "Buy groceries and cook dinner"

# Show help
node index.js help
```

**Global usage:**
```bash
# Create a task (from anywhere)
task-cli create "Buy groceries"

# Update task with ID 1 (from anywhere)
task-cli update 1 "Buy groceries and cook dinner"

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
├── components/             # Core components
│   ├── createTask.js       # Task creation logic
│   ├── updateTask.js       # Task update logic
│   └── help.js            # Help command
└── utils/                 # Utility functions
    ├── colors.js          # Terminal color helpers
    ├── fileValidator.js   # File validation
    ├── path.js           # Path configuration
    └── taskID.js         # ID generation
```

## 🔧 Core Components

### Main Entry Point
- **[`index.js`](./index.js)** - Main application file, handles command routing

### Components

#### [`createTask(taskDescription)`](./components/createTask.js#L8-L39)
Creates a new task with the provided description.

**Location:** [`components/createTask.js`](./components/createTask.js)

**Parameters:**
- `taskDescription` (string): The task description

**Features:**
- Validates task description
- Auto-generates unique task ID
- Adds creation timestamp with timezone
- Saves to JSON file
- [View source code](./components/createTask.js#L8-L39)

---

#### [`updateTask(taskID, taskDescription)`](./components/updateTask.js#L8-L38)
Updates an existing task by ID.

**Location:** [`components/updateTask.js`](./components/updateTask.js)

**Parameters:**
- `taskID` (number): The ID of the task to update
- `taskDescription` (string): The new task description

**Features:**
- Validates task ID and description
- Finds task by ID
- Updates modification timestamp
- [View source code](./components/updateTask.js#L8-L38)

---

#### [`showHelp()`](./components/help.js#L1-L5)
Displays available commands and usage information.

**Location:** [`components/help.js`](./components/help.js)

[View source code](./components/help.js#L1-L5)

---

## 🛠️ Utility Functions

### [`colors.js`](./utils/colors.js)
Terminal color utilities for styled console output.

**Exports:**
- [`colors`](./utils/colors.js#L1-L6) - Color code constants (red, green, reset)
- [`colorize(text, color)`](./utils/colors.js#L8-L10) - Apply color to text

---

### [`fileValidator.js`](./utils/fileValidator.js)
File validation and initialization.

**Function:** [`validateFile()`](./utils/fileValidator.js#L4-L16)
- Checks if tasks.json exists
- Creates file if missing
- Initializes with empty array if empty
- [View source code](./utils/fileValidator.js#L4-L16)

---

### [`taskID.js`](./utils/taskID.js)
Task ID generation logic.

**Function:** [`generateTaskID(tasks)`](./utils/taskID.js#L1-L9)
- Generates unique sequential IDs
- Handles empty task lists
- Finds maximum ID and increments
- [View source code](./utils/taskID.js#L1-L9)

---

### [`path.js`](./utils/path.js)
Path configuration for task storage.

**Exports:**
- [`filePath`](./utils/path.js#L3-L6) - Absolute path to tasks.json

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
- ✅ Update existing tasks
- ✅ Automatic timezone detection
- ✅ Colored terminal output
- ✅ JSON file storage
- ✅ Input validation
- ✅ Error handling
- ✅ Help command

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
- [Create Task Implementation](./components/createTask.js#L8-L39)
- [Update Task Implementation](./components/updateTask.js#L8-L38)
- [Help Command](./components/help.js)

### Utilities
- [Color Utilities](./utils/colors.js)
- [File Validator](./utils/fileValidator.js#L4-L16)
- [Task ID Generator](./utils/taskID.js#L1-L9)
- [Path Configuration](./utils/path.js)
