// task-scheduler.js

class TaskScheduler {
    constructor() {
      this.tasks = [];
    }
  
    scheduleTask(taskFunction, delay) {
      const task = {
        id: Math.random().toString(36).substr(2, 9), // Generate a unique task ID
        taskFunction,
        delay,
        timeoutId: null,
        status: 'scheduled',
      };
  
      this.tasks.push(task);
  
      task.timeoutId = setTimeout(() => {
        task.status = 'executing';
        task.taskFunction();
        task.status = 'completed';
        this.removeTask(task.id);
      }, task.delay);
  
      return task.id;
    }
  
    removeTask(taskId) {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
  
      if (taskIndex !== -1) {
        const removedTask = this.tasks.splice(taskIndex, 1)[0];
        clearTimeout(removedTask.timeoutId);
      }
    }
  
    getAllTasks() {
      return this.tasks.map(({ id, status, delay }) => ({ id, status, delay }));
    }
  
    getTaskStatus(taskId) {
      const task = this.tasks.find((t) => t.id === taskId);
      return task ? task.status : null;
    }
  }
  
  module.exports = TaskScheduler;
  
  // Example Usage:
  
  // const TaskScheduler = require('./task-scheduler');
  // const scheduler = new TaskScheduler();
  
  // const taskId = scheduler.scheduleTask(() => {
  //   console.log('Task executed!');
  // }, 2000);
  
  // console.log(`Task scheduled with ID: ${taskId}`);
  // console.log('All tasks:', scheduler.getAllTasks());
  // console.log(`Status of task ${taskId}:`, scheduler.getTaskStatus(taskId));