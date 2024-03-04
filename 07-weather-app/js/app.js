
const buttonEl=document.querySelector(".btn")
const cityInputEl=document.querySelector(".inputText")
buttonEl.addEventListener("click",async (e)=>{
   e.preventDefault()
 let cityName=  cityInputEl.value
const weatherData= await getWeatherData(cityName)
displayResult(weatherData) 
 
})
const getWeatherData =async (cityName) => { 
   const API_KEY="e4b10158e23084dcb28c8f251c911878";
   const API_URL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
   try {
     const resp= await fetch(API_URL)
     const data= await resp.json()
     console.log(data)
     return data;
       
   } catch (error) {
       console.error("Error:", error);
       
   }
   
}
const  displayResult= (data) => { 
let cityname=document.getElementById("city")
cityname.innerHTML=`${data.name} / ${data.sys.country}`
let temprature=  document.querySelector(".temp")
temprature.innerHTML=kelvinToCelcius(`${data.main.temp}`) 
let stateWeather=document.getElementById("weatherValue")
stateWeather.innerHTML=`${data.weather[0].description}`
let feelsLike=document.getElementById("felt-warmth")
feelsLike.innerHTML=kelvinToCelcius(`${data.main.feels_like}`) 
 }


 const kelvinToCelcius = (temp) => { 
   return `${(temp-273.15).toFixed(0)}`
  }