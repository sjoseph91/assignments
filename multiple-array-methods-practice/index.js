let peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
    
]

function sortedOfAge(arr){
    let olderThan18 = arr.filter(person => person.age > 18);
    olderThan18.sort(function(a,b){
        return a.lastName[0].localeCompare(b.lastName[0]);
    });
    let result = olderThan18.map(function(elem){
        return `<li>${elem.firstName} ${elem.lastName} is ${elem.age}</li>`;
    })
    

    return result;

}

//console.log(sortedOfAge(peopleArray));


// Extra Credit

peopleArray = peopleArray.concat([{
    firstName: "Billy",
    lastName: "Bob",
    age: 100
}]);


function endsinYorA(arr){
    let filtered = arr.filter(function(elem){
        let lastIndex = elem.lastName.length -1;
    
        return (elem.lastName[lastIndex] === 'y' || elem.lastName[lastIndex] === "a");

    })
    filtered.splice(1,1);
    return filtered.reverse();
}
console.log(endsinYorA(peopleArray));