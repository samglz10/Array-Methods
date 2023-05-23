const example = [1, 2, 3, 4, 5, 6, 7, 8]
    // use filter to clone the array but only with even numbers
    const filterExample = example.filter((number)=>{
        if (number % 2 === 0){
            return number;
        }
    })
    //console.log('Example Array' ,  example)
    //console.log('New Array',filterExample);

const example2 = ["foo", "barrrr", "bazz","jazz", "lazzz","far"];
// use filter to clone the array but only with words with 4 or more characters
    const filterExample2 = example2.filter((string)=>{
        if (string.length >= 4){
            return string;
        }
    })
    //console.log('Example2 Array' ,  example2)
    //console.log('New Array2',filterExample2);

const example3 = [false, true, false, true];
// use filter to clone the array but only with true values
const filterExample3 = example3.filter((fact)=>{
    if (true){
        return fact;
    }
})
    //console.log('Example3 Array' ,  example3)
    //console.log('New Array3',filterExample3);
