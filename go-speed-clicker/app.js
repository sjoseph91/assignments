document.querySelector("#counter p").textContent = localStorage.getItem("clicks");

let clickCount = 0;
let coundown = 10;

//starts the counter function when page loads and repeats it for 10 seconds
let timerID = setInterval(counter, 1000);

//stops counter function after 10 seconds
setTimeout(()=>{clearInterval(timerID);alert("Time's up!")}, 11000 );

window.addEventListener("click", clicker)
//after 10 seconds this calls cancel function which turns off event listener
setTimeout(cancel,10000);

function clicker(e){
    e.preventDefault();
    clickCount++;
    document.querySelector("#counter p").textContent = `You have clicked ${clickCount} time(s)`;
    localStorage.setItem("clicks",clickCount);
}

function cancel(){
    window.removeEventListener("click", clicker);
}

function counter(){
    document.getElementById("countdownTimer").textContent = coundown;
    coundown--;
}