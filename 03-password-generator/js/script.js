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
    // Sifreyi goster
});
const generatePassword = (passwordParams) => {
    const { passwordLength, hasUpperCase, hasLowerCase, hasNumber, hasSymbol } =
        passwordParams;
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUYWVZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuywvz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+{}|:;.,?";
    let password = "";
    if (hasUpperCase) {
        password += getRandomChar(upperCaseLetters);
    }
    if (hasLowerCase) {
        password += getRandomChar(lowerCaseLetters);
    }
    if (hasNumber) {
        password += getRandomChar(numbers);
    }
    if (hasSymbol) {
        password += getRandomChar(symbols);
    }
    return password
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
