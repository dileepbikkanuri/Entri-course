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

// An async function to handle the Promises using async/await
async function handlePromises() {
    try {
        await p1; // Wait for p1 to resolve
        console.log("Bye"); // Log "Bye" when p1 is resolved

        // You can also perform other tasks here that depend on p1's resolution

    } catch (error) {
        console.log(error); // Log any errors that occur with p1
    }

    try {
        await p2; // Wait for p2 to resolve

        // You can perform other tasks here that depend on p2's resolution
    } catch (error) {
        console.log(error); // Log any errors that occur with p2
    }
}

handlePromises();
console.log('hi'); // Log "hi"
