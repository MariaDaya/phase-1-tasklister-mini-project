// OO solution
class Task {
  constructor(description) {
    this.description = description;
  }

  render() {
    return `
      <li>
        ${this.description}
      </li>
      `;
  }
}
class TaskList {
  constructor() {
    this.tasks = [];
  }

  createNewTask(description) {
    const newTask = new Task(description);
    this.tasks.push(newTask);
  }

  renderTasks() {
    return this.tasks.map((task) => task.render()).join("");
  }


}


document.addEventListener("DOMContentLoaded", () => {

  const taskList = new TaskList();
  

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  
  const taskUl = document.getElementById("tasks");

  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());


  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    // reset form
    e.target.reset();
    renderApp();
  });

});
