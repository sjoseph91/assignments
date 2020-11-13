// #1

const testArray = [3, 6, 8, 2];

function fiveAndGreaterOnly(arr){
    return arr.filter(num=> num >=5);
}
console.log(fiveAndGreaterOnly(testArray));

//#2
function evensOnly(arr){
    return arr.filter(num=> num % 2 === 0);
}
console.log(evensOnly(testArray));

// #3
const testStrings = ["dog", "wolf", "by", "family", "eaten", "camping"];

function fiveCharactersOrFewerOnly(arr){
    return arr.filter(str=> str.length <= 5);
}
console.log(fiveCharactersOrFewerOnly(testStrings));

// #4
const people = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];
function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(person => person.member === true);
}
console.log(peopleWhoBelongToTheIlluminati(people));

// #5
people2 = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];
function ofAge(arr){
    return arr.filter(function(person){
        if (person.age > 18){
            return true;
            
        }
        else{
            return false;
        }
    })
}
console.log(ofAge(people2));