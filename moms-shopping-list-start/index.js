
const form = document.addItem;
const parentItem = document.getElementById('list');

//form event listener
form.addEventListener("submit", readFormData);




function readFormData(e){
    e.preventDefault();
    //gets value
    let value = form.title.value;
    addToList(value);
    
}

function addToList(val){
    //creates new <li> element w/proper format
    let newItem = document.createElement('li');
    newItem.innerHTML = `<div>${val}</div><button>edit</button><button>X</button>`;
    //appends new <li> onto the page at top of list
    parentItem.prepend(newItem);

    //target delete button
    let deleteButton = document.querySelector('#list button:last-child');
    //add event listener to the delete button just created
    deleteButton.addEventListener('click', (e) =>{
        e.target.parentElement.remove();
    })

    //**Extra Credit Edit button */
    let editButton = document.querySelector('#list button');
    editButton.addEventListener("click",(e) =>{
        let newInputBox = document.createElement('input');
        newInputBox.value = val;
        e.target.textContent = "save";
        e.target.prepend(newInputBox);
        //giving up :)
        

    })


    

}