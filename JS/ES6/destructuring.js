console.log("Hi from Destucturing");

let arr = [1, 2, 3, 4];
let [ele1, ele2, ele3, ele4] = arr;

console.log(ele1, ele2, ele3, ele4);

let course = {
  topic1: "html",
  topic2: "css",
  topic3: "js",
};

let { topic1, topic2, topic3 } = course;
console.log(topic1, topic2, topic3);
