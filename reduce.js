//reduce -to return the sum of all the elements in an array:

const numbers =[1,2,3,4]

let total = 0;

for(let i = 0; i <= numbers.length; i++){
    total+= i;
    console.log(total)
}


function reduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
  
    for (let i = initialValue !== undefined ? 0 : 1; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
      return accumulator;
    }
  
  
    console.log(accumulator)