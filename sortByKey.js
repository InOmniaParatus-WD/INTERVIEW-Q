// Write a function that takes an array of objects as a parameter. 
// The function should sort the array according to the 'key' attribute of the objects and return the sorted array.

// ----------- Using built in sort function
// const  sortByKey = (arr) =>  arr.sort((a, b) => a.key - b.key);

// ---------- Bubble sort
function sortByKey(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j].key > arr[j + 1].key) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwaps = false;
        }
      }
      if (noSwaps) break;
    }
    return arr;
  }

console.log(
  sortByKey([
    { key: 3, value: "foo" },
    { key: 2, value: "bar" },
    { key: 4, value: "baz" },
    { key: 1, value: 42 },
    { key: 5, value: "another string" },
  ])
);
