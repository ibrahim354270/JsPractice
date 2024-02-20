const lblPassword = document.getElementById("lblPassword");
const btnCopy = document.getElementById("btnCopy");
const lblCharLength = document.getElementById("lblCharLength");
const rangeCharLength = document.getElementById("rangeCharLength");
const chkUppercase = document.getElementById("chkUppercase");
const chkLowercase = document.getElementById("chkLowercase");
const chkNumbers = document.getElementById("chkNumbers");
const chkSymbols = document.getElementById("chkSymbols");
const lblStrength = document.getElementById("lblStrength");
const btnGenerate = document.getElementById("btnGenerate");
// EVENT FUNCTION
btnCopy.addEventListener("click", () => {
    const text = lblPassword.textContent;
    if (!text) return;
    copyTextToClipboard(text);
});
rangeCharLength.addEventListener("change", (e) => {
    lblCharLength.textContent = e.target.value;
});
btnGenerate.addEventListener("click", () => {
    // Input degerlerini al
    const passwordLength = rangeCharLength.value;
    const hasUpperCase = chkUppercase.checked;
    const hasLowerCase = chkLowercase.checked;
    const hasNumber = chkNumbers.checked;
    const hasSymbol = chkSymbols.checked;
    // Validation yap
    if (passwordLength <= 0) {
        alert("Character length must be greater than 0");
        return;
    }
    if (!hasUpperCase && !hasLowerCase && !hasNumber && !hasSymbol) {
        alert("Password must include at least a letter, a number or a symbol");
        return;
    }
    // Sifreyi olustur
    const passwordParams = {
        passwordLength,
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSymbol,
    };
    const password = generatePassword(passwordParams);
    lblPassword.textContent = password;
    // Strength i olustur
    const strengthPoint = getStrengthPoint(passwordParams);
    const strengthText = getStrengthIcons(strengthPoint)
    lblStrength.innerHTML = strengthText;
    // Sifreyi goster
});
// GENERIC FUNCTION
const generatePassword = (passwordParams) => {
    const { passwordLength, hasUpperCase, hasLowerCase, hasNumber, hasSymbol } =
        passwordParams;
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUYWVZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuywvz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+{}|:;.,?";
    let allChars = "";
    let password = "";
    // Yapian secimlere gore en az 1 tane karakterin secimi garanti altina aliniyor.
    if (hasUpperCase) {
        password += getRandomChar(upperCaseLetters);
        allChars += upperCaseLetters;
    }
    if (hasLowerCase) {
        password += getRandomChar(lowerCaseLetters);
        allChars += lowerCaseLetters;
    }
    if (hasNumber) {
        password += getRandomChar(numbers);
        allChars += numbers;
    }
    if (hasSymbol) {
        password += getRandomChar(symbols);
        allChars += symbols;
    }
    // Kalan kisim olusturuluyor
    for (let i = password.length; i < passwordLength; i++) {
        password += getRandomChar(allChars);
    }
    // Uretlen sifreyi rasgele karistiriyoruz
    password = randomSort(password);
    return password;
};
const getRandomChar = (chars) => {
    // Math.floor( Math.random() * (max-min+1) + min)
    // 0 - 100 arasinda sayi tutmak icin:
    // Math.floor( Math.random() * 101)
    const randomIndex = Math.floor(Math.random() * chars.length);
    const char = chars.charAt(randomIndex);
    return char;
};
const copyTextToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.log(error);
    }
};
const randomSort = (str) => {
    return str
        .split("") // metni diziye cevirir, her bir karakter bir dizi elemani olur
        .sort((a, b) => Math.random() - 0.5) // rasgele siralama yapar
        .join(""); //  diziyi tekrar stringe cevirir
};
// Kendisine gonderilen sifre bilgilerinden bir zorluk puani olusturur
const getStrengthPoint = (passwordParams) => {
    const { passwordLength, hasUpperCase, hasLowerCase, hasNumber, hasSymbol } =
        passwordParams;
    const strengthPoint =
        (Number(hasUpperCase) +
            Number(hasLowerCase) +
            Number(hasNumber) +
            Number(hasSymbol) * 2) *
        passwordLength;
    return strengthPoint;
};
const getStrengthIcons = (point) => {
    // 1 - 100
    // 1 - 30 -> Zayif
    // 31 - 70 -> Normal
    // 71 - 100 -> Guclu
    let strengthText = "";
    let strengthClass = "weak";
    for (let i = 0; i < Math.ceil(point / 10); i++) {
        strengthText += "&#9929";
    }
    if(point > 70){
        strengthClass = "strong";
    }
    else if(point>30){
        strengthClass = "normal"
    }
    return `<span class="${strengthClass}">${strengthText}</span>`;
};