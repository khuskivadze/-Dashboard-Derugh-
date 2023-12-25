 
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




// toDO

const inputBox = document.querySelector('.input_add');
const listContianer = document.querySelector('.list_contianer ');
const addBtn =  document.getElementById('addBtn');

function addTask () {
  if(inputBox.value === ''){
    alert(' whrite something')
  }else{
        let li = document.createElement("li" ) 
        li.innerHTML = inputBox.value ;
        listContianer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = '<i class="bi bi-trash"></i>'
        li.appendChild(span)
    }
    inputBox.value = ""

}

addBtn.addEventListener('click', addTask)
