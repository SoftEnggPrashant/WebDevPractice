const counter = document.querySelector('#counter');

function decreamen(){
    let counterValue = parseInt(counter.innerText)
    counterValue -= 1;
    counter.innerText = counterValue;
}

function increment(){
    let counterValue = parseInt(counter.innerText)
    counterValue += 1;
    counter.innerText = counterValue;
}