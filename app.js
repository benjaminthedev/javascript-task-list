//Define the UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Loading all event listeners
loadEventListeners();

//Loading all event listeners
function loadEventListeners(){
    //Add taks event
    form.addEventListener('submit', addTask)
}

//Add Task
function addTask(e) {
    if(taskInput.value === ''){
        alert('add a task please')
    }

    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';  
    //Create Text Node & Append To li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create New Link Ele   
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></li>';


   e.preventDefault(); 
}