const readLine = require("readline-sync");
let isGameOver = false;
let playerHealth = 100;
let inventory = [];
let animals = [];

animals.push(new Animal("Grizzley Bear", 50, 10, 100, "Bear pelt"));
animals.push(new Animal("Rabbit",20, 5, 20, "Rabbit foot for good luck"));
animals.push(new Animal("Snake", 30, 10, 40, "Snake skin"));
animals.push(new Animal("Elephant", 60, 30, 200, "Ivory Tusks"));
animals.push(new Animal("Seal", 25, 5, 50, "Blubber"));


console.log("Welcome to the Zoo. There has been a system malfunction and all the cages have been unlocked. The animals are roaming about and are looking for revenge! It is up to you to stop them.");

let playerName = readLine.question("What is your name? ");
console.log(`Hi ${playerName}`);
while (!isGameOver){
    readLine.setDefaultOptions({limit: ['w', 'q', 'p', 'Print']});
    let choice = readLine.question("Enter 'w' to walk. Enter 'q' to quit. Enter 'p' or 'Print' to print player info  ");
    if (choice === 'q')
    {
        console.log("Goodbye!");
        isGameOver = true;
    }
    else if (choice === 'w')
    {
        console.log("You take a few steps forward...")
        if(enemyAppears())
        {
            console.log("AN ENEMY HAS APPEARED!!!!!!!!!!!!!!");
            let currentEnemy = getRandomEnemy();
                console.log(`It's a ${currentEnemy.name}!!!`);
                readLine.setDefaultOptions({limit: ['a', 'r']});
                battle(currentEnemy);
            
            
            
            
        }

    }
    else{
        console.log(`
        Player name: ${playerName}
        HP: ${playerHealth}
        Inventory:${inventory}`);
    }
}


function enemyAppears(){
    let val = Math.random();
    if (val < 0.333)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function Animal(name, maxDamage, minDamage, maxHealth, item){
    this.name = name;
    this.maxDamage = maxDamage;
    this.minDamage = minDamage;
    this.maxHealth = maxHealth;
    this.item = item;
    this.isDefeated = false;
}

function getRandomEnemy(){
    let index = Math.floor(Math.random() * Math.floor(animals.length));
    if (animals[index].isDefeated === true){
        getRandomEnemy();
    }
    return animals[index];
}

function battle(currentEnemy){
    
    while (playerHealth > 0 && currentEnemy.maxHealth > 0)
    {
        
        choice = readLine.question(`What would you like to do? 'a' for attack and 'r' for run. Your health is:${playerHealth} `);
        if (choice === 'r')
        {
            if (Math.random() < 0.5)
            {
                console.log("You have escaped");
                return;
            }
            else
            {
                let damage = Math.floor(Math.random() * (currentEnemy.maxDamage - currentEnemy.minDamage) + currentEnemy.minDamage);
                playerHealth -= damage;
                console.log(`Your escape attempt was unsuccessful and the ${currentEnemy.name} attacked you, dealing ${damage} damage.
                Your health is now at ${playerHealth} `);
                return;
            }
        }
        else{
            let attack = Math.floor(Math.random() * 40);
            currentEnemy.maxHealth -= attack;
            console.log(`You have chosen to attack! You dealt ${attack} damage.
            Your enemy's health is: ${currentEnemy.maxHealth}.`);
            let damage = Math.floor(Math.random() * (currentEnemy.maxDamage - currentEnemy.minDamage) + currentEnemy.minDamage);
            playerHealth -= damage;
            console.log(`Your enemy attacked you and dealt ${damage} damage. 
            Your health is: ${playerHealth}`);
        }
    }
    if (currentEnemy.maxHealth <= 0){
        playerHealth += 20;
        console.log(`You have defeated the ${currentEnemy.name} !!. You have aquired ${currentEnemy.item} and 10 HP!!`);
        inventory.push(currentEnemy.item);
        currentEnemy.isDefeated = true;

    }
    else if (playerHealth <= 0)
            {
                console.log("You have died. The animals will escape the zoo and terrorize the local community :(");
                isGameOver = true;
            }
}