import {data} from "../data/data.js" 
let searchInput=document.querySelector(".search")
let categoriesContainer=document.querySelector(".cats")
let priceRange=document.querySelector(".priceRange")
let priceValue=document.querySelector(".priceValue")
let productsContainer=document.querySelector(".products")
const  displayProducts= (filteredData) => { 
 let showFilteredProducts=  filteredData.map((product)=>`<div class="product">
   <img src=${product.img} alt="resim" />
   <span  class="name"> ${product.name} </span>
   <span  class="price"> ${product.price}</span>
</div>`).join("")
productsContainer.innerHTML=showFilteredProducts
 }
 displayProducts(data)
 //!search
 searchInput.addEventListener("keyup",(e)=>{
 let value= e.target.value.toLowerCase().trim();
 if(value){
  displayProducts(data.filter((item)=>item.name.toLowerCase().includes(value)))
 }else{
  displayProducts(data)
 }
 })
//!categori yerlestirme
const setCategories = () => { 
 let allCategories=  data.map((item)=>item.cat)
console.log(allCategories)
//?1.yol
 let filteredCategories= ["All", ...allCategories.filter((cats,index)=>{
  return allCategories.indexOf(cats)==index
})]
console.log(filteredCategories)
categoriesContainer.innerHTML=filteredCategories.map((cat)=>`<span>${cat}</span>`).join("-")
 }
setCategories()
