var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

vegetables.pop();
fruit.shift();
let orangeNumber = fruit.indexOf("orange");
fruit.push(orangeNumber);
let lengthVegetableArr = vegetables.length;
vegetables.push(lengthVegetableArr);
let food = fruit.concat(vegetables);
food.splice(4,2);
food.reverse();
console.log(food.join(","));
