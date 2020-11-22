class Player{
    constructor(){
        this.name = "";
        this.totalCoins = 0;
        this.status = "Small";
        this.hasStar = false;
        this.gameActive = true;

    }
    setName(namePicked){
        this.name = namePicked;
    }
    gotHit(){
        switch (this.status){
            case "PoweredUp":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead";
                this.gameActive = false;
                break;
            default:
                break;
        }
    }
    gotPowerUp(){
        switch (this.status){
            case "Small":
                this.status = "Big";
                break;
            case "Big":
                this.status = "PoweredUp";
                break;
            case "PoweredUp":
                this.hasStar = true;
                console.log("You have gotten a star");
                break;
            default:
                break;
        }
    }
    addCoin(){
        this.totalCoins++;
    }
    print(){
        console.log(
            `Name: ${this.name},
            Total coins: ${this.totalCoins}
            Status: ${this.status}
            Game Active: ${this.gameActive}
            Has Star:${this.hasStar}`
        );
    }

}

let tester = new Player();
tester.setName("Luigi");

function randomRange(){

    const randomNumber = Math.floor(Math.random() * (3));
    switch (randomNumber){
        case 0:
            tester.gotHit();
            break;
        case 1:
            tester.gotPowerUp();
            break;
        case 2:
            tester.addCoin();
            break;
        default:
            break;
    }
    tester.print();

    if(!tester.gameActive)
{
    
    clearInterval(gameInterval);
    console.log("Game Over");
}
}

let gameInterval = setInterval(randomRange,1000)

console.log(this.gameActive);
