// Define an array of numbers
const numbers = [7, 2, 9, 1, 5];

// Initialize a variable to store the largest element (start with the first element)
let largest = numbers[0];

// Loop through the array starting from the second element (index 1)
for (let i = 1; i < numbers.length; i++) {
  // Compare the current element with the current largest element
  if (numbers[i] > largest) {
    // If the current element is larger, update the largest variable
    largest = numbers[i];
  }
}

// Print the largest element found
console.log(largest); // 9 (in this example, 9 is the largest element in the array)
