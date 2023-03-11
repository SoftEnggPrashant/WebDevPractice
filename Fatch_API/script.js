const apiFunction = async()=>{

    let content = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await content.json();
    console.log(data);

    //then process
//     .then(response => response.json())
//     .then(data => {console.log(data)});
}

apiFunction();


const apiPostFunction = async()=>{

    const data = {
        name:'prashant',
        lastName:'Rajpoot',
        id : '1998',
        weight:'80'
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }

    let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
    let response = await content.json();
    return response;
}

const getData = async()=>{
    let data = await apiPostFunction();
    console.log(data);
}

getData();


//closure funtions

function init(){
    let name = 'prashant';

    function insiteFunction(){
        console.log(name);
    }

    return insiteFunction;
}

let myFunc = init();
myFunc();