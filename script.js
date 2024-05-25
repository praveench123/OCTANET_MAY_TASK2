function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
      alert('Please enter a task');
      return;
  }

  const taskList = document.getElementById('task-list');

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  checkbox.onchange = () => toggleTask(li);
  li.appendChild(checkbox);

  const taskSpan = document.createElement('span');
  taskSpan.className = 'task-text';
  taskSpan.textContent = taskText;
  li.appendChild(taskSpan);

  const editButton = document.createElement('button');
  editButton.className = 'edit-button';
  editButton.textContent = 'Edit';
  editButton.onclick = () => editTask(taskSpan);
  li.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = () => deleteTask(li);
  li.appendChild(deleteButton);

  taskList.appendChild(li);
  taskInput.value = '';
}

function toggleTask(taskElement) {
  const checkbox = taskElement.querySelector('.checkbox');
  const taskSpan = taskElement.querySelector('.task-text');

  if (checkbox.checked) {
      taskElement.classList.add('checked');
  } else {
      taskElement.classList.remove('checked');
  }
}

function editTask(taskSpan) {
  const newTaskText = prompt('Edit task:', taskSpan.textContent);
  if (newTaskText !== null && newTaskText.trim() !== '') {
      taskSpan.textContent = newTaskText.trim();
  }
}

function deleteTask(taskElement) {
  taskElement.remove();
}
