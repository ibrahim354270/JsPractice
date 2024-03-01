const api_url="https://api.exchangerate-api.com/v4/latest/"

const currencyElOne=document.getElementById("currency-one")
const currencyElTwo=document.getElementById("currency-two")
const amountEl=document.getElementById("amount")
const btnConvert=document.getElementById("btn-convert");
const resultEl=document.getElementById("result");

//! load selects
fetch("data/currencies.json")
.then(res=>res.json())
.then(data=>{

    const keys = Object.keys(data);
    const values = Object.values(data);

    let optionStr="";
    for(let i=0;i<keys.length;i++){
        optionStr+=`<option value=${keys[i]}>${values[i]}</option>`
    }

    currencyElOne.innerHTML=optionStr;
    currencyElTwo.innerHTML=optionStr;


   
})
.catch(err=>console.log(err));

btnConvert.addEventListener("click",()=>{
    const baseCurrency=currencyElOne.value;
    const targetCurrency=currencyElTwo.value;

    const amount=amountEl.value;
    
    fetch(`${api_url}${baseCurrency}`)
    .then(res=>res.json())
    .then(data=>{
        const rate=data.rates[targetCurrency];
        resultEl.innerHTML=`${amount} ${baseCurrency} = ${rate*amount} ${targetCurrency}`

        amountEl.value="";

        
    })
    })