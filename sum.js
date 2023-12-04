function addInteger(array, integer) {
 if (!Array.isArray(array)) {
  throw new Error('First argument must be an array');
}

if (typeof integer !== 'number') {
  throw new Error('Second argument must be a number');
}

array.push(integer);
}

let arr = [1, 2, 3];
addInteger(arr, 4);
console.log(arr); // [1, 2, 3, 4]