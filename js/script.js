const buttonSubmitForm = document.getElementById('submit-form');

buttonSubmitForm.addEventListener('click', () => {
  alert('Formulario enviado');
});
const buttons = document.querySelectorAll('.product .button');
buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'yellow';
  });
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = 'var(--primary-color)';
  });
});

const list = document.getElementById('list');
const submitTask = document.getElementById('submit-task');
const taskInput = document.getElementById('task-input');

list.addEventListener('click', (event) => {
  // Verificar si el clic fue en un LI
  if (event.target.tagName === 'LI') {
    // Marcar como completado
    event.target.style.textDecoration = 'line-through';
  }
});

submitTask.addEventListener('click', () => {
  if (taskInput.value.trim() === '') return;
  const nuevoLi = document.createElement('li');
  nuevoLi.textContent = taskInput.value;

  list.appendChild(nuevoLi);
  taskInput.value = '';
});
