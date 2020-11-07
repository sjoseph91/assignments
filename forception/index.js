var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"



function forception(people, alphabet){
    //turning alphabet string to an array with uppercase letters
    let splitAlphabet = alphabet.toUpperCase().split("");
    let result = [];

    //iterating through outer array
    for (let i = 0; i < people.length; i++) {
        const element = people [i];
        //pushing element to result array
        result.push(element)
        for (let j = 0; j < splitAlphabet.length; j++)
        {
            result.push(splitAlphabet[j]);
        }
        
    }
    return result;
}
//outpouting the result of the function to the console.
console.log(forception(people,alphabet));