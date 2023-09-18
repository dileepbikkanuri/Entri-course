// Define the number of rows for the pattern
const rows = 5;

// Loop through each row
for (let i = 1; i <= rows; i++) {
  // Initialize an empty string to store the pattern for this row
  let pattern = "";

  // Inner loop to add stars to the pattern
  for (let j = 1; j <= i; j++) {
    pattern += "* "; // Add a star and a space
  }

  // Print the pattern for this row
  console.log(pattern);
}
