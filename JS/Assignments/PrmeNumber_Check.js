// Define the number to be checked for primality
const n = 7;

// Initialize a boolean variable to true (assuming n is prime)
let isPrime = true;

// Iterate from 2 to the square root of n
for (let i = 2; i <= Math.sqrt(n); i++) {
  // Check if n is divisible by the current value of i
  if (n % i === 0) {
    // If it is divisible, set isPrime to false and break out of the loop
    isPrime = false;
    break;
  }
}

// Print the result
console.log(isPrime); // true (in this example, 7 is a prime number)