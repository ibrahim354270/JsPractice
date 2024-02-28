import { data } from "../data/data.js";
let searchInput = document.querySelector(".search");
let categoriesContainer = document.querySelector(".cats");
let priceRange = document.querySelector(".priceRange");
let priceValue = document.querySelector(".priceValue");
let productsContainer = document.querySelector(".products");
const displayProducts = (filteredData) => {
    let showFilteredProducts = filteredData
        .map(
            (product) => `<div class="product">
   <img src=${product.img} alt="resim" />
   <span  class="name"> ${product.name} </span>
   <span  class="price">$ ${product.price}</span>
</div>`
        )
        .join("");
    productsContainer.innerHTML = showFilteredProducts;
};
displayProducts(data);
//!search
searchInput.addEventListener("keyup", (e) => {
    let value = e.target.value.toLowerCase().trim();
    if (value) {
        displayProducts(
            data.filter((item) => item.name.toLowerCase().includes(value))
        );
    } else {
        displayProducts(data);
    }
});
//!categori yerlestirme
const setCategories = () => {
    let allCategories = data.map((item) => item.cat);
    //console.log(allCategories);
    //?1.yol
    /*  let filteredCategories= ["All", ...allCategories.filter((cats,index)=>{
  return allCategories.indexOf(cats)==index
})] */
    //?2.yol
    let filteredCategories = [...new Set(allCategories)];
    filteredCategories = ["All", ...filteredCategories];
    categoriesContainer.innerHTML = filteredCategories
        .map((cat) => `<span>${cat}</span>`)
        .join("");
   //! categorilere tıklandıgında filtreleme yapılması
   categoriesContainer.addEventListener("click",(e)=>{
  let selectedCat= e.target.textContent
  selectedCat=="All" ? displayProducts(data) :
 displayProducts(data.filter((item)=>item.cat==selectedCat)) 
   })
   //!price filtreleme
   const setPrices = () => { 
    let priceList=  data.map((item)=>item.price)
 let minPrice=   Math.min(...priceList)
 let maxPrice=   Math.max(...priceList)
priceRange.min=minPrice
priceRange.max=maxPrice
priceRange.value=maxPrice
priceValue.textContent=`$ ${maxPrice}`
//!pricerange aralik belirleme
priceRange.addEventListener("input",(e)=>{
 
  let value= e.target.value;
  priceValue.textContent=`$ ${value}`;
  displayProducts(data.filter((item)=>item.price<=value))
})
    }
    setPrices ()
}
setCategories();
/* let x=[1,6,3,4,4,4];
console.log(x)
x=new Set(x)
console.log(x) */
/* let numbers=[11,6,8,4,2]
numbers=Math.max(...numbers)
console.log(numbers) */