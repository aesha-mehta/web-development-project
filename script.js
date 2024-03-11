function addTask() {
    var taskInput = document.getElementById('taskInput').value;
    var prioritySelect = document.getElementById('prioritySelect').value;
    var deadlineInput = document.getElementById('deadlineInput').value;
  
    if (taskInput === '') {
      alert('Please enter a task description.');
      return;
    }
  
    var taskList = document.getElementById('taskList');
  
    var taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.classList.add(prioritySelect);
    
    var taskDescription = document.createElement('span');
    taskDescription.classList.add('description');
    taskDescription.textContent = taskInput;
  
    var taskDeadline = document.createElement('span');
    taskDeadline.textContent = ' | Deadline: ' + deadlineInput;
  
    taskDiv.appendChild(taskDescription);
    taskDiv.appendChild(taskDeadline);
    taskList.appendChild(taskDiv);
  }
  