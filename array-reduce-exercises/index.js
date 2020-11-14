const test = [1,2,3];
 // #1
 
 const total = test.reduce(function(final, start){
        final += start;
        return final;
 })
 console.log(total);

 // #2
 const stringConcat = test.reduce(function(final, start){
    final += start;
    return final;
 }, "");

 console.log(stringConcat);

 // #3
 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const totalVotes = voters.reduce(function(final,index){
        if(index.voted)
        {
            final++;
        }
        return final;
},0)
console.log(totalVotes);

// #3 Version 2

const totesVotes = voters.filter(voter =>voter.voted).length;

console.log(totesVotes);

// #4
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const cost = wishlist.reduce(function(final, item){
    final += item.price;
    return final;
}, 0)

console.log(cost);

// #5
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
function flatten(arr){
    let result = arr.reduce(function(final, index){
        final.push(...index);
        //final.concat(index);
        return final;
    
            
    }, []);

    return result;

}
console.log(flatten(arrays));

// #6

voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr){
    let template = { numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0 
      };


    const result = arr.reduce(function(final, voter){
        if (voter.age >= 18 && voter.age <= 25){
            final.numYoungPeople++;
            if (voter.voted){
                final.numYoungVotes++;
            }
        }else if (voter.age >= 26 && voter.age <= 35){
            final.numMidsPeople++;
            if (voter.voted){
                final.numMidVotesPeople++;
            }
        }else if (voter.age >= 36 && voter.age <= 55){
            final.numOldsPeople++;
            if (voter.voted){
                final.numOldVotesPeople++;
            }
        }
        return final;
    },template );




    return result;
}

console.log(voterResults(voters))