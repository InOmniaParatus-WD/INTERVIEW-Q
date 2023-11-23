// Write a function that takes a string as a parameter. This string represents a number that can be in any base (less than 37) and return the sum of its digits.

const sumDigits = (str) => {
    return [...str]
    .map((char) =>
      /[A-Z]/gi.test(char) === true
        ? parseInt(char, 36) // this will convert the character letter into a number
        : +char
    )
    .reduce((c, p) => c + p);
};

console.log(sumDigits("1")) //1
console.log(sumDigits("12345")) //15
console.log(sumDigits("254")) //11
console.log(sumDigits("fe")) //29
console.log(sumDigits("f0e")) //29
console.log(sumDigits("999ABCXYZ")) // 162

console.log(sumDigits("999ABcIKXyZf")) //215
