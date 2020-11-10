const form = document["travel-form"];
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const fName = form.fname.value;
    const lName = form.lname.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const destination = form.destinations.value;
    let dietPreferences = [];
    const checked = document.querySelectorAll("input[name=diet]:checked");
    for (let i = 0; i < checked.length; i++)
    {
        dietPreferences.push(checked[i].value);
    }
    console.log(dietPreferences);
    alert(`
    First Name: ${fName}
    Last Name: ${lName}
    Age ${age}
    Gender: ${gender}
    Destination: ${destination}
    Diet Preferences: ${dietPreferences} `)

});