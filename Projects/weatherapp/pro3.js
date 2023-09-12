const APIKEY = `4b89e3659f5dcb0233efeaf9bc255478` 
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
const getWeather = async (city) => {
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`  
const response = await fetch(url)
const data = await response.json()
return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)


let backChange = document.getElementById("changeMe");
let d = new Date();
let currentTime = d.getHours();

    if (currentTime <= 19) {
     document.getElementById("changeMe").style.background = "url('https://vanlifematters.co.uk/wp-content/uploads/2023/04/Tenby.jpg') no-repeat";
     document.getElementById("changeMe").style.backgroundSize = ("cover");
    }
    else {
        document.getElementById("changeMe").style.background = "url('https://c4.wallpaperflare.com/wallpaper/791/690/403/new-york-city-black-and-white-hd-wallpaper-wallpaper-thumb.jpg') no-repeat";
        document.getElementById("changeMe").style.backgroundSize = ("cover");
    }



//    let change = document.getElementById("changeMe")
    
//     change.style.background = "red";
