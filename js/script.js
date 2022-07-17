const citySearch = document.querySelector('.city-search')
const search = document.querySelector('.searchBtn')
const cityN = document.querySelector('.city')
const cond = document.querySelector('.clr-')
const mainW = document.querySelector('.weather')

search.addEventListener('click', output)

const options = {
    method: 'GET',
    headers: {
//         'X-RapidAPI-Key': Add your key here,
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
};

function output(e){
    let city = citySearch.value
    const addApi = async () =>{
        const url = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=metric`
        const repo = await fetch(url,options)
        const data = await repo.json()
        dom(data)
    }
    addApi()
}

const dom = (data) => {
    cityN.innerHTML = `<h3>${data.name},${data.sys.country}</h3><h6 class="cood">${data.coord.lat},${data.coord.lon}</h6>`
    cond.innerHTML = `<h2>${data.weather[0].main}</h2>`
    mainW.innerHTML = `<div class="dt tmp">Temp: ${data.main.temp}°C</div><div class="dt feel">Feels like: ${data.main.feels_like}°C</div><div class="dt hum">Humidity: ${data.main.humidity}</div>`
}



