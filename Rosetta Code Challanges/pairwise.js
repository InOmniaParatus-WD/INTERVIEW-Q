function pairwise(arr, num) {
  // construiesc un array nou de lungimea lui arr, cu valori boolean ca sa pot sa marchez ce numere adunate dau num
  let bools = new Array(arr.length).fill(false);
  let sums = 0;
  // iterez prin arr ca sa gasesc numerele a caror suma este egala cu num
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (!bools[i] && !bools[j] && arr[i] + arr[j] === num) {
        bools[i] = true;
        bools[j] = true;
        // console.log(i, j);
        sums += i + j;
      }
    }
  }
  //  console.log(bools);
  //  console.log(sums);
  return sums;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); //11
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); //10
console.log(pairwise([], 100))
console.log(pairwise([1, 3, 2, 4], 4)) //1
console.log(pairwise([1, 1, 1], 2)) //1


