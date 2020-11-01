const readLine = require("readline-sync");

const name = readLine.question("What is your name? ");

let hasKey = false;
let gameOver = false;

let choices = ['Put Hand in Hole', 'Find the Key', 'Open the Door'];
while (!gameOver){
    let index = readLine.keyInSelect(choices, `What would you like to do, ${name}?\n`);
    

    switch (index){
        case 0:
            console.log("You're dead and your game is over \n");
            gameOver= true;
            break;
        case 1:
            console.log("You have found the key!\n");
            hasKey = true;
            break;
        case 2:
            if (hasKey)
            {
                console.log("You have opened the door and won the game!!! \n");
                gameOver = true;

            }
            else{
                console.log("You don't have the key... \n")
            }
            break;
        default:
            gameOver = true;
            break;
    }

}

 
