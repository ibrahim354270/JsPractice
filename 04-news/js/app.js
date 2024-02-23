import { newsData } from "../data/news.js";
//console.log(newsData)
const loadData = () => {
    let str = "";
    newsData.forEach((item) => {
        str += createNewsCards(item);
    });
    document.getElementById("news").innerHTML = str;
};
const createNewsCards = (item) => {
   let like = createLike(item.like)
    return `
<div class="col">
                    <div class="card h-100" role="button" data-id="${item.id}">
                        <img
                            src="${item.image}"
                            class="card-img-top"
                            alt="${item.title}"
                        />
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <h5 class="card-title text-danger">${like}</h5>
                            <p class="card-text">
                                ${item.description}
                            </p>
                            
                        </div>
                    </div>
                </div>
    `;
};
const createLike = (score,limitLike=5) => { 
    let likeHearts=""
    for(let i=0;i<limitLike;i++){
        if(i<score){
            likeHearts+=`<i class="fa-solid fa-heart"></i> `
        }else{
            likeHearts+=`<i class="fa-regular fa-heart"></i> `
        }
    }
    return likeHearts;
 }
 const createNewsDetails = (news) => { 
    let like = createLike(news.like)
    return`
    <div class="col">
    <img src="${news.image}" class="card-img-top" alt="${news.title}"/>
                        
    </div>
    <div class="col">
    <h3>${news.title}</h3>
    <span>${like}</span>
    <h5>${news.description}</h5>
    <p>${news.content}</p>
    </div>
    `
  }
 
 document.querySelector("#news").addEventListener("click",(e)=>{
  
  let newsID= e.target.closest(".card").dataset.id //getAttribute("data-id")
  //console.log(newsID)
  let filteredNews=  newsData.find((item)=>item.id=== Number(newsID))
 // let filteredNews=  newsData.filter((item)=>item.id=== Number(newsID))
  //console.log(filteredNews)
  let newsDetails=  createNewsDetails(filteredNews)
  document.getElementById("newsDetails").innerHTML = newsDetails
  window.scrollTo(0,0)
     
 })
loadData();