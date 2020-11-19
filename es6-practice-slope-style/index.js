// ......................................LEVEL 1

// rest operator
function collectAnimals(...animals){
    return animals;
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

//object literals
function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables};
}
console.log(combineFruit(["apple", "pear"],
["cake", "pie"],
["carrot"]));


//object drestructuring
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  function parseSentence({location, duration}){
      return `We're going to have a good time in ${location} for ${duration}`;
  }
  console.log(parseSentence(vacation));
//array destructuring
  function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}
console.log(returnFirst(["H","B","G"]));

//more destructuring
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [first, second, third] = arr;
    return `My top three favorite activities are, ${first}, ${second}, and ${third}`;
}
console.log(returnFavorites(favoriteActivities));


//..........................................Level 2
function combineAnimals(...arraysOfAnimals){
    let result = [];
    arraysOfAnimals.forEach(arr =>{
        for (let i = 0; i < arr.length; i++){
            result.push(arr[i]);
        }
    })
    return result;
}

    

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// ...........................................Level 3
let product = (...nums) =>{
    return nums.reduce((final,start) =>{
        return final * start;
    },1)
}

console.log(product(2,4,5));

function unshift(array, ...arr){
    return [...arr,array];
}
console.log(unshift(["Hi","There"], 3, 4, 5, 6));


// ...............................................Level 4
function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
            let firstName = name[0];
            let lastName = name[1];
        return {firstName, lastName};
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));