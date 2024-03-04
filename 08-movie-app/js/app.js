
const API_URL =
  "https:api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&";
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzY0Zjk1OTU1MGYzYjM5YjA2MzM3NzdjODM4NDljMyIsInN1YiI6IjY0YTQ5MDc3MTU4Yzg1MDBlMjRhMjE2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vDftJp7IIiV09L83kfq6dLgliSnYbmrOj5H9BrpQ26c'
    }
  };
  
let formEl=document.getElementById("form")
let searchEl=document.getElementById("search")
let mainEl=document.getElementById("main")
const getMoviesData = (url) => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
    })
    .catch(err => console.error(err));
  }
  getMoviesData(API_URL)