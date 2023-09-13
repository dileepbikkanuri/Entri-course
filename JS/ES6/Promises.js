// Log "hi" three times
console.log('hi');
console.log('hi');
console.log('hi');

// Create a Promise for a successful DB call
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('DB call successful');
        resolve(25); // Resolve the promise with the value 25
    }, 2000);
});

// Create a Promise for an unsuccessful DB call
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('DB call not successful');
        reject(new Error("DB Backend Failure")); // Reject the promise with an error
    }, 2000);
});

console.log('hi'); // Log "hi"

// Handle the successful DB call promise
p1.then((response) => {
    console.log("Bye"); // Log "Bye" when the promise is resolved
}).catch((error) => {
    console.log(error); // Log any errors that occur
});

console.log('hi'); // Log "hi"
