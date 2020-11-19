// #1
const name = "John"
let  age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// #2
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots));

// #3

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter( person => person.friendly)
}
console.log(filterForFriendly(people));

let doMathSum = (a , b) => a + b;
console.log(doMathSum(2,5));

let produceProduct = (a, b) => a * b;
console.log(produceProduct(3,4));

// #4
function printString(firstName = "Jame", lastName ="Doe", age = 100){
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
}
console.log(printString("kim"));

// #5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];

 function filterForDogs(arr){
     return arr.filter(animal => animal.type === "dog");
 }
 console.log(filterForDogs(animals));

 function greeting(location, name){
     return `
Hi ${name}! Welcome to ${location}.\n
I hope you enjoy your stay. \n
Please ask the president of ${location} if you need anything.`;
 }
 console.log(greeting("Ohio", "Tim"));