const form = document["baddies"];


form.addEventListener("submit", calculate);

function calculate(e){
    e.preventDefault();
    //making sure only integers are read
    const goombaCount = parseInt(form.goomba.value);
    const bobombCount = parseInt(form["bob-omb"].value);
    const cheepCheepCount = parseInt(form["cheep-cheep"].value);
    const total = (goombaCount * 5) + (bobombCount * 7) + (cheepCheepCount * 11);
    console.log(total);
    console.log(typeof total);

    //null check usint falsy property of NaN
    if(total){
        let newP = document.createElement('p');
        newP.textContent = `${total} coins!`;
        document.getElementById('sum').append(newP);
    }
    else{
        alert("Please enter valid numbers into fields");
    }
}