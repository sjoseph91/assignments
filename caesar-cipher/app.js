/*Program goes through each charachter in the input string,
,gets the ASCII value, applies the shift, does some logic,
, and finds the shifted letter, which is then added to a new string 
that is returned at the end of the program*/

//the global String object is a method called .charCodeAt(0) which returns the ASCII value.
//opposite is String.fromCharCode(#ASCII value);

const readline = require('readline-sync');

const input = readline.question('What phrase would you like to encrypt? \n').toLowerCase();
const shift = parseInt(readline.question('How many letters would you like to shift? \n'));
let cipheredString = "";


for (let i = 0; i < input.length; i++){
    if(isLetter(input[i])){
        cipheredString += getShiftedCharacter(input[i])
    }
    else{
        cipheredString += input[i];
    }
    
}
console.log(cipheredString);

function isLetter(letter){
    let char = letter.charCodeAt(0);

    return (char > 64 && char < 91) || (char > 96 && char < 123)
}

function getShiftedCharacter(char){
    let newASCII = char.charCodeAt(0) + shift;
    if (newASCII > 122){
        newASCII = (newASCII % 122) + 96;
    }
    return String.fromCharCode(newASCII);
    
}
