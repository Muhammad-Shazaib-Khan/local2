let number = prompt("Enter the number of elements you want in the array:");
let array = [];

for(let i = 0; i < number; i++){
    let value = prompt("Enter the value for element " + (i+1) + ":");
    array.push(value);
}

console.log("The array is: " + array);