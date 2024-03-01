
const buttonEl=document.querySelector(".btn")
const cityInputEl=document.querySelector(".inputText")
buttonEl.addEventListener("click",async (e)=>{
   e.preventDefault()
 let cityName=  cityInputEl.value
const weatherData= await getWeatherData(cityName)
 
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
