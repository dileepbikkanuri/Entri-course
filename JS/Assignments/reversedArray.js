//reversedArray
// Define the input array
const inputArray = [1, 2, 3, 4, 5];

// Initialize an empty array to store the reversed elements
const reversedArray = [];

// Loop through the inputArray in reverse order
for (let i = inputArray.length - 1; i >= 0; i--) {
  // Push each element from inputArray to reversedArray
  reversedArray.push(inputArray[i]);
}

// Print the reversedArray, which now contains the elements in reverse order
console.log(reversedArray); // [5, 4, 3, 2, 1]
