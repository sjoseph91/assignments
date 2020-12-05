
const baseURL = "https://api.vschool.io/seanjo/todo/";

//get todo from api on screeen load
displayToDoList();



const form = document.toDoForm;
form.addEventListener("submit", e =>{
    e.preventDefault();
    const formData = {
        title: form.title.value,
        price: +form.price.value,
        description: form.description.value,
        imgUrl: form.url.value
    }
    postToApi(formData);
    clearData();
    displayToDoList()
})

document.getElementById("update").addEventListener("click", e=>{
    e.preventDefault();
    displayToDoList();
})





function postToApi(toDoObj){
    axios.post(baseURL, toDoObj)
        .then(res => console.log(res.data))
        .catch(error => console.log(error));

}
function clearData(){
    form.title.value = "";
    form.price.value = 0;
    form.description.value = "";
    form.imgUrl = "";
}

function displayToDoList(){

    let toDoList = document.querySelector("#toDoItems");
    while (toDoList.firstChild){
        toDoList.removeChild(toDoList.firstChild);
    }
    let listItems;
    axios.get(baseURL)
        .then(response =>{
            listItems = response.data;
            listItems.forEach( item =>{
                
               let newTodo = createToDo(item);
               
                document.querySelector("#toDoItems").appendChild(newTodo);
               
            })
            //Add event listener for clicking completed checkbox
            document.querySelectorAll("#toDoItems input").forEach(element =>{
                element.addEventListener("click", e =>{
                    let id = e.target.getAttribute("id")
                    let updateObj = {};
                    if(e.target.checked){
                        updateObj.completed = true;
                        updateApi(id, updateObj);
                    }
                    else{
                        updateObj.completed = false;
                        updateApi(id, updateObj);
                    }

                    
                    
                })
            })
            addDeleteEventHandler();
        })
        .catch(error => console.log(error))

   

}

function addDeleteEventHandler(){
    document.querySelectorAll("#toDoItems button").forEach(element =>{
        element.addEventListener("click", e =>{

            e.preventDefault();
            let id= e.target.getAttribute("id");
            axios.delete(baseURL + id)
                .then(response => {
                    alert("Item will be deleted. Click update");
                })
                .catch(error => console.log(error))

            
            })
    })
}


function updateApi(idNum, obj){
    
    axios.put(baseURL + idNum , obj)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}

function createToDo(data){
    const newDiv = document.createElement("div");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.setAttribute("id", data["_id"]);
    
    const label = document.createElement("label");
    label.textContent = "Completed?";
    label.setAttribute("for", "completed");

    const checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("name", "completed");
    checkBox.setAttribute("id", data["_id"]);
    checkBox.innerText ="Completed?";

    const newP = document.createElement("p");
    newP.innerText = data.title;

    const newImg = document.createElement("img");
    newImg.setAttribute("src", data.imgUrl)
    newImg.setAttribute("width", "100px");
    
    
    if (data.completed){
        newP.innerHTML = `<s>${data.title}</s>`;
        checkBox.checked = true;
    }
    newDiv.appendChild(deleteButton);
    newDiv.appendChild(label);
    newDiv.appendChild(checkBox);
    newDiv.appendChild(newP);
    newDiv.appendChild(newImg);
    

    return newDiv;
    

}