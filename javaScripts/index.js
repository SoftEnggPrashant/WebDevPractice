console.log("hello javascript");

let arr1 = [
    {no:1,name:'first'},
    {no:2,name:'second'}
]

let arr2 = [
    {no:3,name:'third'},
    {no:4,name:'fourth'}
]

let newArray = [...arr2,...arr1];
console.log(newArray);

let result = newArray.find(item=>item.name === 'second')

console.log(result);


// sorting 
console.log('before sorting',newArray);
newArray.sort((first,second)=>{
    return first.no - second.no;
})
console.log('after sorting',newArray);


//slicing the array of objects

let myObject = newArray.slice(1,3);
console.log('sliced object array',myObject);
