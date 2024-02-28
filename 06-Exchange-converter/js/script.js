const currencyElOne=document.getElementById("currency-one")
const currencyElTwo=document.getElementById("currency-two")
const amountEl=document.getElementById("amount")
const btnConvert=document.getElementById("btn-convert");
const resultEl=document.getElementById("result");

//! load selects
fetch("data/currencies.json")
.then(res=>res.json())
.then(data=>{
    //console.log(data);
    for(const code in data){
        currencyElOne.innerHTML+=`<option value="${code}">${code}</option>`
        currencyElTwo.innerHTML+=`<option value="${code}">${code}</option>`
    }
})