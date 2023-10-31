
const apikey = "8b64a452a411173367fd5894989eb629";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q= ";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
async function checkWeather(city){
	cityName.innerHTML = city
	const response = await fetch(apiURL + city + `&appid=${apikey}`);
	Vardata = await response.json();
	console.log(Vardata);

	feels_like.innerHTML = Vardata.main.feels_like
	temp_max.innerHTML = Vardata.main.temp_max
	temp_min.innerHTML = Vardata.main.temp_min
	humidity.innerHTML = Vardata.main.humidity
	humidity2.innerHTML = Vardata.main.humidity
	temp.innerHTML = Vardata.main.temp
	temp2.innerHTML = Vardata.main.temp
	deg.innerHTML = Vardata.wind.deg
	speed.innerHTML = Vardata.wind.speed
	speed2.innerHTML = Vardata.wind.speed
	
	
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	checkWeather(city.value);
	})

