//#1
let numbers = [1, 3, 5, 2, 90, 20];
numbers.sort((a,b)=> a - b);
console.log(numbers);

// #2
numbers.sort((a,b) => b - a);
console.log(numbers);

// #3
let strings = ["dog", "wolf", "by", "family", "eaten"];

strings.sort((a,b) => {
    return a.length - b.length;
})
console.log(strings);
// #4
strings.sort((a,b) => {
    
    return a.localeCompare(b);
})
console.log(strings);

// #5
let people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
];
people.sort(function(a,b){
    return a.age - b.age;
});
console.log(people);

