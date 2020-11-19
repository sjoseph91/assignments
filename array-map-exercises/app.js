// #1

const numbers = [2, 5, 100];

function doubleNumbers(arr){
    return arr.map(number=> number * 2);
    
}
console.log(doubleNumbers(numbers));

// #2
function stringItUp(arr){
    return arr.map(num => num.toString());
}
console.log(stringItUp(numbers));

//#3
const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

function capitalizeNames(arr){
    return arr.map((name) => {
        
        const first = name[0].toUpperCase();
        return first.concat(name.slice(1).toLowerCase());
    })
}
console.log(capitalizeNames(names));

// #4
const people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];
function namesOnly(arr){
    return arr.map(obj =>{
        return obj.name;
    })
}
console.log(namesOnly(people));

// #5

function makeStrings(arr){
    return arr.map( person => {
        if (person.age > 20)
        {
            return `${person.name} can go to the Matrix`;
        }
        else{
            return `${person.name} is under age`;
        }
    })
}
console.log(makeStrings(people));

// #6
function readytoPuInTheDom(arr){
    return arr.map(person =>{
        return `<h1>${person.name}</h1><h2>${person.age}</h2>`
    })
}

console.log(readytoPuInTheDom(people));