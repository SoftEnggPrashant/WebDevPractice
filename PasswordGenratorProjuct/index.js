const slidebar = document.querySelector('#slide-id');
const lengthValue = document.querySelector('#length-value');
const indicator = document.querySelector('.indicator');
const UppercaseCheck = document.querySelector('#uppercase');
const LowercaseCheck = document.querySelector('#lowercase');
const NumbersCheck = document.querySelector('#numbers');
const SymbolsCheck = document.querySelector('#symbols');
const allCheckBox = document.querySelectorAll('input[type=checkbox]')
const passworDisplay = document.querySelector('[data-passwordDisplay]');
const copyMsg = document.querySelector('.copied-text');
const copyBtn = document.querySelector('[data-copy]');
const generateBtn = document.querySelector('#generate-btn');



let passwordLegth = 10;
let chekedCount = 1;
setSlideBarValue(passwordLegth);
setIndicator('#ccc')


function setSlideBarValue(value){
    lengthValue.textContent = value;
    slidebar.value = passwordLegth;;

    const max = slidebar.max;

    slidebar.style.backgroundSize = `${(passwordLegth) * 100 / (max)}% 100%`
}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`
}

function getRandomInteger(min,max){
    return Math.floor(Math.random() * (max-min))+min;
}

function getRandomUpperCaseLetter(){
    return String.fromCharCode(getRandomInteger(65,91));
}

function getRandomLowerCaseLetter(){
    return String.fromCharCode(getRandomInteger(97,123))
}

function getRandomNumbers(){
    return getRandomInteger(0,9);
}

function getRadomSymbol(){
    let symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
    return symbols.charAt(getRandomInteger(0,symbols.length));
}

function calcStrenth(){

    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSymb = false;

    if(UppercaseCheck.checked) hasUpper = true;
    if(LowercaseCheck.checked) hasLower = true;
    if(NumbersCheck.checked) hasNum = true;
    if(SymbolsCheck.checked) hasSymb = true;


    if(hasUpper && hasLower && (hasNum || hasSymb) && passwordLegth >= 8){
        setIndicator('#0f0');
    }
    else if((hasLower || hasUpper) && (hasSymb || hasNum) && passwordLegth >= 6){
        setIndicator('#ff0');
    }
    else{
        setIndicator('#f00');
    }
}

function handlecheckBoxChange(){
    let checkobxCount = 0;

    allCheckBox.forEach( checkbox =>{
        if(checkbox.checked){
            checkobxCount++;
        }
    })

    if(passwordLegth < checkobxCount){
        passwordLegth = checkobxCount;
        setSlideBarValue(passwordLegth);
    }
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passworDisplay.value);
        copyMsg.innerText = 'Copied';
    }
    catch(e){
        copyMsg.innerText = 'Failed';
    }

    copyMsg.classList.add('active');

    setTimeout(()=>{
        copyMsg.classList.remove('active');
    },2000);
}

function shufflePassword(array){
    array.sort(()=> Math.random() > 0.5 ? 1:-1)
    let newPassword = '';
    array.forEach(element =>{
        newPassword += element;
    })
    return newPassword;
}



allCheckBox.forEach(checkbox => {
    checkbox.addEventListener('change',handlecheckBoxChange)
});

slidebar.addEventListener('input',(e)=>{
    let changeValue = e.target.value;
    passwordLegth = changeValue;
    setSlideBarValue(passwordLegth);
})

copyBtn.addEventListener('click',()=>{
    if(passworDisplay.value){
        copyContent();
    }
})

generateBtn.addEventListener('click',()=>{

    if(chekedCount == 0){
        return;
    }

    if(passwordLegth < chekedCount){
        passwordLegth = chekedCount;
        setSlideBarValue(passwordLegth);
    }


    let password = '';

    let funcArr = [];

    if(UppercaseCheck.checked){
        funcArr.push(getRandomUpperCaseLetter);
    }
    if(LowercaseCheck.checked){
        funcArr.push(getRandomLowerCaseLetter);
    }
    if(NumbersCheck.checked){
        funcArr.push(getRandomNumbers);
    }
    if(SymbolsCheck.checked){
        funcArr.push(getRadomSymbol);
    }


    for(let i = 0;i<funcArr.length;i++){
        password += funcArr[i]();
    }

    for(let i = 0; i< passwordLegth - funcArr.length; i++){
        let randIndex = getRandomInteger(0,funcArr.length);
        password += funcArr[randIndex]();
    }

    password = shufflePassword(Array.from(password));
    passworDisplay.value = password;

    calcStrenth();
})


