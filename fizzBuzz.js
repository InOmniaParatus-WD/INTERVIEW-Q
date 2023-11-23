// Write a program that generates an array of integers from 1 to 100 (inclusive). But:
// - for multiples of 3, add "Fizz" to the array instead of the number
// - for multiples of 5, add "Buzz" to the array instead of the number
// - for multiples of 3 and 5, add "FizzBuzz" to the array instead of the number
// Your program should return an array containing the results based on the rules above.

function fizzBuzz() {
  let arr = new Array(100).fill(1)

  for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0)
      arr[i] = "FizzBuzz"
    else if (arr[i] % 3 === 0) arr[i] = "Fizz"
    else if (arr[i] % 5 === 0) arr[i] = "Buzz"
  }
  
  return arr
}
