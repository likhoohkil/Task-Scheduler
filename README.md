# PDF Generator

A simple yet powerful PDF generation tool written in TypeScript.

## Installation

```bash
npm install pdf-generator
```

## Usage

```javascript
const PDFGenerator = require("pdf-generator");

// Create a new PDFGenerator instance
const pdfGenerator = new PDFGenerator();

// Add content to the PDF
pdfGenerator
  .addText("Hello, this is a PDF generated using PDFGenerator!", {
    fontSize: 20,
    align: "center",
  })
  .addPage()
  .addText("This is page 2 of the PDF.", {
    y: 100,
    align: "center",
  });

// Save the PDF
pdfGenerator.save();
```

## API

### `PDFGenerator(options?: PDFGeneratorOptions)`

Creates a new instance of PDFGenerator with optional options.

- `options.filename`: Specify the filename for the generated PDF. Default is `'output.pdf'`.

### `addText(text: string, options?: TextOptions): PDFGenerator`

Adds text to the PDF document.

- `text`: The text content to add.
- `options`: Optional parameters for text formatting, such as fontSize, font, alignment, etc.

### `addPage(): PDFGenerator`

Adds a new page to the PDF document.

### `save(): void`

Saves the PDF document to the specified filename.

## Example

Check the `example` directory for an example usage of the PDFGenerator.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
# Task Scheduler

A simple and lightweight Task Scheduler package for JavaScript. This package allows you to schedule tasks with specified delays.

## Installation

Install the package using npm:

```bash
npm install your-task-scheduler-package
const TaskScheduler = require('your-task-scheduler-package');
const scheduler = new TaskScheduler();

// Schedule a task to be executed after 2000 milliseconds (2 seconds)
const taskId = scheduler.scheduleTask(() => {
  console.log('Task executed!');
}, 2000);

console.log(`Task scheduled with ID: ${taskId}`);
console.log('All tasks:', scheduler.getAllTasks());
console.log(`Status of task ${taskId}:`, scheduler.getTaskStatus(taskId));
API
scheduleTask(taskFunction, delay)
Schedules a task to be executed after the specified delay in milliseconds. Returns a unique task ID.

taskFunction: The function to be executed when the task runs.
delay: The delay in milliseconds before the task is executed.
removeTask(taskId)
Removes a scheduled task based on its unique ID.

taskId: The unique ID of the task to be removed.
getAllTasks()
Returns an array of objects containing information about all scheduled tasks. Each object includes id, status, and delay.

getTaskStatus(taskId)
Returns the status of a task based on its unique ID.

taskId: The unique ID of the task.
License
This project is licensed under the MIT License - see the LICENSE file for details.