const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');


todoForm.addEventListener('submit', addTodoItem);

function createTodoItem(title) {

  const label = document.createElement('label');
  label.innerText = title;
  label.className ='title';

  const deleteButton = document.createElement('button');
  deleteButton.innerText= 'Удалить';
  deleteButton.className = 'delete';

  const listItem = document.createElement('li');
  listItem.className= "todo-item";

  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  console.log(listItem);
  bindEvents(listItem);

  return listItem;

}

function bindEvents(todoItem) {

  const deleteButton= todoItem.querySelector('button.delete');
  deleteButton.addEventListener('click', deleteTodoItem);

}

function addTodoItem(event) {
  event.preventDefault();

  if(addInput.value === '')  alert("Закажите столик.");

  const todoItem =createTodoItem(addInput.value);
  todoList.appendChild(todoItem);
  addInput.value = ''; 


}


function deleteTodoItem () {
  const listItem= this.parentNode;
  todoList.removeChild(listItem);
}