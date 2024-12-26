const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const card = document.querySelector('.card')
const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    showWeather(data);
}

const showWeather = (data) => {
    const oldWeather = card.querySelector('.weather')
    if (oldWeather) {
        card.removeChild(oldWeather)
    }
    // console.log(data)
    if (data.cod == "404") {
        card.innerHTML = '<h1>City not found</h1> <i class="fa-solid fa-rotate-right onclick="click() style="padding: 5px; font-size: 20px" ></i> '
    }
        const weather = document.createElement('div');
        weather.classList.add('weather');
        weather.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="weather-icon" alt="">
            <h1 class="temp">${data.main.temp}°C</h1>
            <h2 class="city">${data.name}</h2>
        <div class="details">
            <div class="col">
                <img src="humidity.png" alt="">
            <div class="more">
                <p class="humidity">${data.main.humidity}%</p>
                <p>Humidity</p>
            </div>
        </div>
        <div class="col">
            <img src="wind.png" alt="">
            <div class="more">
                <p class="wind">${data.wind.speed}km/h</p>
                <p>Wind Speed</p>
            </div>
            </div>
        </div>`;
            
            card.appendChild(weather);
        
}

const click = document.addEventListener('click', function (event) {
        return reload();
})

const reload = () => {
    location.reload(getWeather)
}

const search = document.querySelector('fa-solid fa-magnifying-glass')

// const icon = () => {
//    document.addEventListener('click', function (event) => {
//     const city = document.querySelector('.search input').value;
//     getWeather(city)
// })
// }

const input = document.addEventListener('keyup', 
    function (event) {        
        if (event.key == 'Enter') {
            const city = document.querySelector('.search input').value;
            getWeather(city)
        }
}
);



// initial call
// getWeather('abohar')

