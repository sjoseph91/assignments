
function fizzbuzz(){
    let result = [];

    for (let i = 1; i <= 100; i++)
    {
        if ( i % 3 === 0){
            if ( i % 5 === 0){
                result.push("FizzBuzz");
            }
            else
            {
                result.push("Fizz");
            }
        }
        else if ( i % 5 === 0){
            result.push("Buzz");
        }
        else
        {
            result.push(i);
        }
    }
    return result;
}
console.log(fizzbuzz());
const testArr = fizzbuzz();

function phraseCounter(arr){
    let fizzBuzzCount = 0;
    let fizzCount = 0;
    let buzzCount = 0;
    for (let i = 0; i < arr.length; i++)
    {
        switch (arr[i]){
            case "Fizz":
                fizzCount++;
                break;
            case "Buzz":
                buzzCount++;
                break;
            case "FizzBuzz":
                fizzBuzzCount++;
                break;
            default:

        }
    } 
    let result = {
        fizzbuzz: fizzBuzzCount
        ,fizz: fizzCount
        ,buzz: buzzCount
    }
    return result;
}

console.log(phraseCounter(testArr));