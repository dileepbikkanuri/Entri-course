const callbackTest = () => {
  console.log("I am being printed inside callbackTest function");
};

const add = (n1, n2, callback) => {
  console.log(n1 + n2);
  callback();
};

let a = 1;
let b = 5;
add(a, b, callbackTest);
