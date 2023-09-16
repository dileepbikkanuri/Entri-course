const n = 7; // Change this value to the number of terms you want to generate.
let first = 0, second = 1, next;

console.log(first); // Print the first term (0)
console.log(second); // Print the second term (1)

for (let i = 2; i < n; i++) {
  next = first + second;
  console.log(next); // Print the next term
  first = second;
  second = next;
}
