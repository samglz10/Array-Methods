// Implement all of the standard array methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[5, 6, 7, 8].forEach((value, _, arr) => {
    console.log(value);
});
// 5
// 6
// 7
// 8

function forEach<T>(
    array: T[],
    callbackFn: (value: T, index: number, thisArray:T[]) => void,
) {
    for(let i = 0; i < array.length; i++){
        const item = array[i]
        callbackFn(item, i, array)
    }
}




function find<T>(
    array:T[], 
    callbackFn: (element: T, index: number, thisArray: T[]) => boolean,
): T  | undefined {
    for(let i = 0; i < array.length; i++){
        const element = array[i]
        const found = callbackFn(element, i, array)
        if (found === true){
            return element
        }
    } 
    
    return undefined
}

// filter


function tsFilteredMethod<T>(callbackFn:T[], thisArg:T[]):T => {
    return callbackFn.filter((thisArg) => {
        return thisArg.length
    })
}
tsFilteredMethod([1],[2])


// map
const newArray:T[]=[];

function tsMapMethod<T>(callbackFn:T[], element, index, newArray, thisArg:T[]) => {
   
    })
}
// findIndex
// some
// every
// reduce
// flat


