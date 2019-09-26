console.log('JS working');

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
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    //Clear Task Event
    clearBtn.addEventListener('click', clearTasks);
    //Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

//Add Task
function addTask(e) {
    if(taskInput.value === ''){
        alert('add a task please'); 
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
    //Append the link to the li
    li.appendChild(link);

    //Append li to the ul 
    taskList.appendChild(li);
    //console.log(li);

    //Clear Input
    taskInput.value = '';

   e.preventDefault(); 
}

//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure? ')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

function clearTasks(e){
     //One way of doing it could be
     //taskList.innerHTML = '';
     //It is just set to clear


     //But we would rathe have it be done with a while loop:
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}


//Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none  ';
        }
    });
}