//main variables to grab from settings to be able to see if they are 'checked' or not

const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const upperCaseElement = document.getElementById('uppercase');
const lowerCaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const createElement = document.getElementById('create');
const clipElement = document.getElementById('clipboard');
const fontElement = document.getElementById('fontsize')

const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

// I decided to move away from the string.fromCharCode() and I think this is a more readable way to build this idea
function getRandomLower() {
    const low = 'abcdefghijklmnopqrstuvwxyz'
    return low[Math.floor(Math.random() * low.length)]
};

function getRandomUpper() {
    const upp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return upp[Math.floor(Math.random() * upp.length)]
};

function getRandomNumber() {
    const num = '1234567890'
    return num[Math.floor(Math.random() * num.length)]
};

function getRandomSymbol() {
    const sym = '!@#$%^&*-_'
    return sym[Math.floor(Math.random() * sym.length)]
};



//code below looks to see if a button is checked or not, evaluating true or false.

createElement.addEventListener('click', () => {
    const length = lengthElement.value;
    const hasLower = lowerCaseElement.checked;
    const hasUpper = upperCaseElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbol = symbolsElement.checked;

    resultElement.innerText = generatePassword (
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});


//main password function

function generatePassword(lower, upper, number, symbol, length) {

    let genereatedPassword = ""

    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.values(item)[0]
    );

    if(typesCount===0) {
        return "";
    }

    //alert for people trying to go over the limit and then a reset
    if(length > 20) {
        alert("i think 20 characters is just fine, don't you?")
        return "";
    }
    //alert for people trying to go under the limit and then a reset
    if(length < 8) {
        alert("i think we should have at least 8 characters, yeah?")
        return "";
    }

    //changes font size to better fit the design if user selects a certain length. 
    if(length > 12) {
        fontElement.style.fontSize = "3.5em"
    } else if(length > 18) {
        fontElement.style.fontSize = "3.1em"
    } else {
        fontElement.style.fontSize = "5em"
    }

    


    // this code will randomize the positions of the array as well as the data inside them. see ReadMe for more info.

    for(let i = 0; i<length; i++) {
        const randomChoie = Math.floor(Math.random() * typesArr.length);
        genereatedPassword += randomFunctions[Object.keys(typesArr[randomChoie])]();
    }


    const finalPassword = genereatedPassword.slice(0, length);

    return finalPassword;
    
}
