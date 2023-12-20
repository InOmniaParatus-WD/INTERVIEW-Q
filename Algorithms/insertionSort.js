function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // Start by picking the second element in the array
    let currVal = arr[i];
    // Then compare the second element with the one before it and swap if necessary.
    for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
      arr[j] = currVal;
      // console.log(arr);
    }

    // console.log(arr);
  }
  return arr;
}

console.log(insertionSort([5, 1, 34, 15, 7]));
console.log(insertionSort([4, 3, 2, 1]));

console.log(
  insertionSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
); // should return [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]
console.log([5, 4, 33, 2, 8]); // should return [2, 4, 5, 8, 33]
