const xhr = new XMLHttpRequest;

xhr.open("GET","https://api.vschool.io/pokemon/",true);

xhr.send();

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status ===200)
    {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        showData(data.objects[0].pokemon);
    }
}

function showData(pokemonArr){

    for (let i = 0; i < pokemonArr.length; i++)
    {
        const h2 = document.createElement("h2");
        h2.textContent = pokemonArr[i]["name"];
        document.querySelector("body").appendChild(h2);
    }

}
