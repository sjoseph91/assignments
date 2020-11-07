// #1
function capilizeAndLowercase(str){
    let result = str.toUpperCase().concat(str.toLowerCase());

    return result;
}
console.log(capilizeAndLowercase("Hello"));

// #2
function findMiddleIndex(str){
    let result = Math.floor(str.length / 2)
    return result;
}
console.log(findMiddleIndex("Hello"));

// #3
function returnFirstHalf(str){
    let lastIndex = findMiddleIndex(str);

    return str.slice(0,lastIndex);
}
console.log(returnFirstHalf("Hello World"));

// #4
function halfCapitalhalfLower(str){
    let middle = findMiddleIndex(str)
    let firstHalf = str.slice(0,middle);
    let lastHalf = str.slice(middle);
    return firstHalf.toUpperCase().concat(lastHalf.toLowerCase());

}
console.log(halfCapitalhalfLower("Hello World"));

// optional
function capitalizeAfterSpace(str){
    //turn str into an array of words.
    var splitString = str.split(" ")
    var resultArr = [];
    
    //[hey, friends, practice, practice, practice]
    for (let i = 0; i < splitString.length; i++){
        let word = splitString[i];
        let firstCapital = word[0].toUpperCase();
        let restofWord = word.slice(1)
        let newWord = firstCapital.concat(restofWord);
        resultArr.push(newWord);
    }
    return resultArr.join(" ");

}
console.log(capitalizeAfterSpace("hey friends! practice practice practice!"));