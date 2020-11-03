//#1
for (let i = 0; i < 10; i++)
{
    console.log(i);
}
//#2
for (let i = 9; i >= 0; i--)
{
    console.log(i);
}

//#3
var fruit = ["banana", "orange", "apple", "kiwi"]
for (let index = 0; index < fruit.length; index++) {
    console.log(fruit[index]);
    
}

//Bronze 1
let bronze = [];
for (let i = 0; i <= 9; i++)
{
    bronze.push(i);
}
console.log(bronze);

//Bronze 2
let evenNumbers = [];
for (let i = 0; i <= 100; i += 2)
{
    console.log(i);
}

//Bronze 3
fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var everyOtherFruit = [];
for (let i = 0; i < fruit.length; i += 2){
    everyOtherFruit.push(fruit[i]);
}
console.log(everyOtherFruit);

//Silver 1
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

for (let i = 0; i < peopleArray.length; i++)
{
    console.log(peopleArray[i].name);
}

//Silver 2
let names = [];
let occupations = [];
for (let i = 0; i < peopleArray.length; i++)
{
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);

//Silver 3
names = [];
occupations = [];
for (let i = 0; i < peopleArray.length; i += 2)
{
    names.push(peopleArray[i].name);

    if( i + 1 < peopleArray.length){
        occupations.push(peopleArray[i + 1].occupation);
    }
}
console.log(names);
console.log(occupations);

//gold 1
let threeByThree = [];
for (let i = 0; i < 3; i++)
{
    threeByThree.push([])
    for (let j = 0; j < 3; j++){
        threeByThree[i][j] = 0;
    }
}
console.log(threeByThree);

//gold 2
threeByThree = [];
for (let i = 0; i < 3; i++)
{
    threeByThree.push([])
    for (let j = 0; j < 3; j++){
        threeByThree[i].push(i);
    }
}
console.log(threeByThree);

// gold3
threeByThree =[];
for (let i = 0; i < 3; i++)
{
    threeByThree.push([]);
    for (let j = 0; j < 3; j++)
    {
        threeByThree[i].push(j);
    }
}
console.log(threeByThree);

//gold 4

for (let i = 0; i < threeByThree.length; i++)
{
    for (let j = 0; j < threeByThree[i].length; j++){
        threeByThree[i][j] = 'X';
    }
}
console.log(threeByThree);