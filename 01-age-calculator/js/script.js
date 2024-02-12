function getAge() {
    // input elementlerini al
    const txtDay = document.querySelector("#day");
    const txtMonth = document.querySelector("#month");
    const txtYear = document.querySelector("#year");
    // input degerlerini al
    const day = Number(txtDay.value); // falsy-> undefined, NaN, null,  0, empty
    const month = Number(txtMonth.value);
    const year = Number(txtYear.value);
    // input degerlerini kotrol et
    if (!day || typeof day !== "number" || day < 1 || day > 31) {
        alert("Invalid day");
        return;
    }
    if (!month || typeof month !== "number" || month < 1 || month > 12) {
        alert("Invalid month");
        return;
    }
    if (!year || typeof year !== "number" || year < 1) {
        alert("Invalid year");
        return;
    }
    // mevcut tarihi al
    const currentDate = new Date();
    
    // input degerlerden dogum tarihini olustur
    const birthDate = new Date(`${year}-${month}-${day}`);
    //const birthDate = new Date(year, month - 1, day);
    // Mevcut tarih ile dogum tarihini karsilastir
    if (birthDate > currentDate) {
        alert("Invalid date");
        return;
    }
    
    // Mevcut tarihi gun ay yil olarak ayir
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // sifir tabanli oldugu icin 1 ekledik
    const currentDay = currentDate.getDate();
    // Mevcut tarihten dogum tarihini cikar
    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;
    if(ageDays<0){
        ageDays += 30;
        ageMonths--;
    }
    if(ageMonths<0){
        ageMonths+=12;
        ageYears--;
    }
   
    // sonucu goster
    document.querySelector("#lblYears").textContent = ageYears;
    document.querySelector("#lblMonths").textContent = ageMonths;
    document.querySelector("#lblDays").textContent = ageDays;
}
