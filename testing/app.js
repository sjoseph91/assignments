function flipCoin(){
    return new Promise((resolve,reject) => {
        const randomNum = Math.floor(Math.random() * 2);

        if (randomNum === 0){
            resolve("Heads");
        }else if (randomNum ===1 ){
            reject("Tails");
        }
    })
}

flipCoin()
    .then(response => console.log("REsolved" + response))
    .catch(error => console.log("Rejected" + error));

