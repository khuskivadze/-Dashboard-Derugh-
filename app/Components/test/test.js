const addTaskBtsn = document.getElementById('addBtn');
const inputBox =  document.querySelector('.inputs');
const tasks = document.querySelector('.tasks')
const task = document.querySelector('.task')
const trashBtn = document.querySelector('.trash')

function addTask() {

    if(inputBox.value === ''){
        alert('You must add new task !!!')
    }
    else{
        let newTask = document.createElement('li');
        newTask.classList.add('task');
        newTask.innerHTML = `
        <i class="bi bi-circle" id="check"></i>
        <a href="#"> ${inputBox.value}</a>
        <i class="bi bi-trash2-fill trash" id="trash"></i>
        
        
        `
        tasks.appendChild(newTask)
    }
    
        
      
}addTaskBtsn.addEventListener('click', addTask)


function removeTask() {
      console.log('remove')
}


task.addEventListener('click', removeTask)