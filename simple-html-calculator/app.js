/* Adding event listeners to each math form
that read input and ouput a new html <p> element with 
the correct answer
*/


const addForm = document["add-form"];
const subtractForm = document["subtract-form"];
const multiplyForm = document["multiply-form"];

addForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let num1 = parseInt(addForm.num1.value);
    let num2 = parseInt(addForm.num2.value);
    addForm.num1.value = "";
    addForm.num2.value = "";
    let answer = document.createElement("p");
    answer.textContent = `${num1} + ${num2} is ${num1 + num2}`;
    answer.style.backgroundColor = "white";
    document.getElementById("add").append(answer);
})

subtractForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let num1 = parseInt(subtractForm.num1.value);
    let num2 = parseInt(subtractForm.num2.value);
    subtractForm.num1.value = "";
    subtractForm.num2.value = "";
    let answer = document.createElement("p");
    answer.textContent = `${num1} - ${num2} is ${num1 - num2}`;
    answer.style.backgroundColor = "white";
    document.getElementById("subtract").append(answer);
})
multiplyForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let num1 = parseInt(multiplyForm.num1.value);
    let num2 = parseInt(multiplyForm.num2.value);
    multiplyForm.num1.value = "";
    multiplyForm.num2.value = "";
    let answer = document.createElement("p");
    answer.textContent = `${num1} x ${num2} is ${num1 * num2}`;
    answer.style.backgroundColor = "white";
    document.getElementById("multiply").append(answer);
})