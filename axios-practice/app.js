
//url https://api.vschool.io/seanjo/todo/


const todoForm = document.todo;

todo.addEventListener('submit', e =>{
    e.preventDefault();
    
    let newTodo = createTodoObject()
    postToApi(newTodo);
    clearForm();
})





function createTodoObject(){
    return {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }
}

function postToApi(objToBePosted){
    axios.post("https://api.vschool.io/seanjo/todo/",objToBePosted)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}

function clearForm(){
    todoForm.title.value = "";
    todoForm.description.value = "";
    todoForm.imgUrl.value = "";
}

const updates = {
    price: 200
}
// axios.put("https://api.vschool.io/seanjo/todo/5fbd777cee6f8d3fc3feb50d", updates)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error));

axios.get("https://api.vschool.io/seanjo/todo/")
    .then( response => console.log(response.data))
    .catch(error => console.log(error));

