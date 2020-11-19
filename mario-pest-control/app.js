const form = document["baddies"];


form.addEventListener("submit", calculate);

function calculate(e){
    e.preventDefault();
    //making sure only integers are read
    const goombaCount = parseInt(form.goomba.value);
    const bobombCount = parseInt(form["bob-omb"].value);
    const cheepCheepCount = parseInt(form["cheep-cheep"].value);
    const total = (goombaCount * 5) + (bobombCount * 7) + (cheepCheepCount * 11);


    
    document.getElementById("sum").textContent = `${total} coins!`;
    
    
}