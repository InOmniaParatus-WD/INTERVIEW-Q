// The objective is to write a function that finds the sum of all positive multiples of 3 or 5 below n.

function sumMults(n) {
  // let arr = [];
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      // arr.push(i)
      sum += i;
  }

  // return arr.reduce((a,b) => a + b)
  return sum;
}

console.log(sumMults(10)) // 23
console.log(sumMults(100)) // 2318
console.log(sumMults(1000)) // 233168
console.log(sumMults(10000)) // 23331668
console.log(sumMults(100000)) // 2333316668
