
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dc64f959550f3b39b0633777c83849c3";
  let POSTER_PATH="https://image.tmdb.org/t/p/w1280"
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzY0Zjk1OTU1MGYzYjM5YjA2MzM3NzdjODM4NDljMyIsInN1YiI6IjY0YTQ5MDc3MTU4Yzg1MDBlMjRhMjE2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vDftJp7IIiV09L83kfq6dLgliSnYbmrOj5H9BrpQ26c",
    },
  };
  
let formEl=document.getElementById("form")
let searchEl=document.getElementById("search")
let mainEl=document.getElementById("main")
const getMoviesData = (url) => {
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
      if( data.results && data.results.length>0){
        showMovies(data.results)
      }
      
      
    })
    .catch(err => console.error(err));
  }
  getMoviesData(API_URL)
formEl.addEventListener("submit",(e)=>{
  e.preventDefault()
let searchTerm=searchEl.value
if(searchTerm){
let SEARCH_API = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=dc64f959550f3b39b0633777c83849c3&include_adult=false&language=en-US&page=1`;
getMoviesData(SEARCH_API)
}else{
  window.location.reload()
}
})
const showMovies = (movies) => { 
  mainEl.innerHTML=""
  movies.forEach((movie)=>{
console.log(movie)
  let imageContent=  movie.poster_path ?
   `<img   src="${POSTER_PATH+movie.poster_path}"  alt="${movie.title}" />`:
   `    <img
   src="https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=20&m=911590226&s=612x612&w=0&h=HlJtSKF-fLsKFy1QJ-EVnxXkktBKNS-3jUQPXsSasYs="
   alt="movie card"
 />`
let moviEl= document.createElement("div")
moviEl.classList.add("movie")
moviEl.innerHTML=`  
${imageContent}
<div class="movie-info">
<h3>${movie.title}</h3>
<span class="${getVote(movie.vote_average)}" >${(movie.vote_average.toFixed(1))}</span>
</div>
<div class="overview">
<h3>${movie.
  overview}</h3>
  
<p>
${movie.title}
</p>
</div>
`
mainEl.appendChild(moviEl)
  });
 }
  const getVote = (vote) => { 
    if(vote>=7){
      return "green"
    }else if(vote>=5){
      return "gold"
    }else{
      return "crimson"
    }
  }