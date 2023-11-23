// Write a function to find the sum of squares of an array of integers.

// -------- One line solution using JS higher order functions
// const sumsq = (array) => array.map(e => Math.pow(e,2)).reduce((a,b) => (a+b))

// ------- for loop, O(n)
function sumsq(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]**2
    }

    return sum;
}

console.log(sumsq([1, 2, 3, 4, 5])) // 55
console.log(sumsq([25, 32, 12, 7, 20])) // 2242
console.log(sumsq([38, 45, 35, 8, 13])) // 4927
console.log(sumsq([43, 36, 20, 34, 24])) // 5277
console.log(sumsq([12, 33, 26, 18, 1, 16, 3])) // 2499