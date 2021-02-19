//main variables to grab from settings to be able to see if they are 'checked' or not

const resultElement = document.getElementById('result');
const lenghtElement = document.getElementById('length');
const upperCaseElement = document.getElementById('uppercase');
const lowerCaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const clipElement = document.getElementById('clipboard');

const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

// using the string.fromCharCode object to call out a random lowercase letter. see readMe for more information on it.
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
};

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
};

function getRandomSymbol() {
    const symbol = '!@#$%^&*-_'
    return symbol[Math.floor(Math.random() * symbol.length)]
};



//we now need to be able to see if a box is checked or not when we click our 'create password' button. will log as either true or false

generateElement.addEventListener('click', () => {
    const length = +lenghtElement.value;
    const hasLower = lowerCaseElement.checked;
    const hasUpper = upperCaseElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbol = symbolsElement.checked;

    //checking to see it it works when button is clicked, it does!
    // console.log(hasLower, hasUpper, hasNumber, hasSymbol)

    resultElement.innerText = generatePassword (
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

function generatePassword(lower, upper, number, symbol, length) {

    let genereatedPassword = ""

    const typesCount = lower + upper + number +symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.values(item)[0]
    );

    if(typesCount===0) {
        return "";
    }

    if(length > 20) {
        alert("i think 20 characters is just fine, don't you?")
        return "";
    }

    for(let i=0; i < length; i+= typesCount) {
        typesArr.forEach(type => {
            const functionName = Object.keys(type)[0];
            genereatedPassword += randomFunctions[functionName]();
        });
    }

    const finalPassword = genereatedPassword.slice(0, length);

    return finalPassword;
    
}
