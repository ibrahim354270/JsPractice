// input elemenetlerini sec
const txtWeight = document.querySelector("#weight");
const txtHeight = document.querySelector("#height");
const indicator = document.querySelector("#indicator");
const indicatorLabel = indicator.querySelector("label");
function getBMI() {
    // input degerlerini al ve number a cevir
    const weight = Number(txtWeight.value)
    const height = Number(txtHeight.value)
    
    // degerleri kontrol et
    
    // bmi hesapla   // bmi = kg / (m * m) 
    const bmi = weight / (height/100) ** 2
    console.log(bmi)
    // indicator i ayarla
    const leftPosition = bmi > 50 ? 100 : bmi * 2;
    indicatorLabel.textContent = bmi.toFixed(0);
    indicator.style.left = `${leftPosition}%`
    if(leftPosition>50){
        indicatorLabel.style.left = "-5px";
        indicatorLabel.style.transform = "translateX(-100%)"
    }
    else{
        indicatorLabel.style.left = "20px";
        indicatorLabel.style.transform = "translateX(0)"
    }
}