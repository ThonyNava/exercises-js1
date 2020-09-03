// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// Arrow Function
let multipliedBy100_AF = (n) => {
  return n * 100;
};

// Function
function multipliedBy100(n) {
  return n * 100;
}

console.log(numbers.map(multipliedBy100_AF));
console.log(numbers.map(multipliedBy100));
