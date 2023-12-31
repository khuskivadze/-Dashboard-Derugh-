//ამინდის კონტეინერის სელექტორები
const container = document.querySelector('.container');
const search = document.querySelector('.search_box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-detalis');
const display =  document.querySelector('.outdor')
 
//სერჩ იკონზე ვამაგრებთ მომსმესნ და ვიწყებთ სერვერიდან ინფორმაციის მოფეჩვას

search.addEventListener('click', () => {
    // აიპი მისამართის პირადი პაროლი
    const APIKey = 'bfe989b95711f8a57ff03a49ce8de64e';
    // კლიკზე ჩაწერლილი ქალაქის სახელის მოძიება და მნიშვნელობის გამოტანა
    const city = document.querySelector('.search_box  input').value;
    if (city == ''){
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json()).then(json =>{

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-detalis .humidity span');
        const wind = document.querySelector('.weather-box .wind span');
        switch (json.weather[0].main) {
            case 'Clear':
                image.src = '/Assets/clear.png'
            break;
            case 'Rain':
                image.src = '/Assets/rain.png'
            break;
            case 'Cloud':
                image.src = '/Assets/cloud.png'
            break;
            case 'Night':
                image.src = '/Assets/night.png'
            break;
            case 'Lightning':
                image.src = '/Assets/lightning.png'
            break;
            default:
                image.src = '/Assets/default.png'
               
        }
        temperature.innerHTML = `${parseInt(json.main.temp)} <span>°C</span>`;
        display.innerHTML=`${parseInt(json.main.temp)}<p> Outdoor temperature: <span> </span> <p/>  `;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    });
})

const allTasks = document.querySelectorAll('.same_Clase');

allTasks.forEach(box => {  
   box.addEventListener('click', (e) => {
        box.style.textDecoration = 'line-through';
        box.style.color = 'green'
         
    })
});


const allCheck = document.querySelectorAll('.task_check');

allCheck.forEach(check => {
    check.addEventListener('click', (e) => {
        check.style.color = 'green'
    })
})
 
// toDO
const addTaskBtsn = document.getElementById('addBtn');
const inputBox =  document.querySelector('.inputs');
const tasks = document.querySelector('.tasks_container')
const task = document.querySelector('.same_Clase')

function addTask() {
   if(inputBox.value === ''){
        alert('You must add new task !!!')
    } 
   else   {
        let newTask = document.createElement('li');
        newTask.classList.add('task_box');
        

        newTask.innerHTML = `

        <li class="task_box same_Clase" id="box1">
             <i class="bi bi-check-circle-fill task_check" ></i>
             <p id="task_text">${inputBox.value}</p>
            <i class="bi bi-trash3 sameTrash" id="task_trash1"></i>
        </li>

        ` 
        newTask.addEventListener('click', () => {
            newTask.style.textDecoration = 'line-through';
            
            newTask.style.color = 'green'
        })
        

       
       

        tasks.appendChild(newTask)
        inputBox.value = ''
    } 

    
     
     
     



        
}
addTaskBtsn.addEventListener('click', addTask)

 
 
 
 
 

 
