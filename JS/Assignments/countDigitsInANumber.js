// Define the number for which you want to count the digits
const n = 12345;

// Initialize a variable to count the digits
let count = 0;

// Create a temporary variable to store n (so that n itself doesn't change)
let temp = n;

// Continue the loop until temp becomes 0
while (temp !== 0) {
  // Increment the count for each digit
  count++;

  // Remove the last digit by dividing temp by 10 (flooring the result)
  temp = Math.floor(temp / 10);
}

// Print the count, which represents the number of digits in n
console.log(count); // 5 (in this example, 12345 has 5 digits)
