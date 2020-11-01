let square = document.getElementById('square');

square.addEventListener("mouseover", changeToBlue);
square.addEventListener("mouseout", changeToDefault);
square.addEventListener("mousedown", changeToRed);
square.addEventListener("mouseup", changeToYellow);
square.addEventListener("dblclick", changeToGreen);
window.addEventListener("scroll", () =>{square.style.backgroundColor = 'orange'});



function changeToBlue(){
    square.style.backgroundColor = "blue";
}

function changeToDefault(){
    square.style.backgroundColor = "rgb(189, 178, 178)";
}
function changeToRed(){
    square.style.backgroundColor = "red";
}
function changeToYellow(){
    square.style.backgroundColor = "yellow";
}
function changeToGreen(){
    square.style.backgroundColor = "green";
}