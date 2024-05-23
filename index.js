var count=1;

const textArea = document.querySelector(".textarea");
const button = document.querySelector(".buttoninput");
const todoList = document.querySelector(".todolist");

button.addEventListener("click", addToDoListItem);

function addToDoListItem(){

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("task");

    const Count = document.createElement("p");
    Count.innerHTML= count;
    toDoDiv.appendChild(Count)

    const item = document.createElement("p");
    item.innerHTML=textArea.value;
    toDoDiv.appendChild(item);

    if(textArea.value == '') 
        return;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML='<i class="fa fa-trash"></i>'
    deleteButton.classList.add("trash-button");
    deleteButton.title="Delete task";
    toDoDiv.appendChild(deleteButton);
    todoList.appendChild(toDoDiv);
    textArea.value='';

    count++;
   
}

todoList.addEventListener("click",deleteItem);

function deleteItem(e) {
    const item = e.target;
    if(item.classList[0] === "trash-button"){
        const parent = item.parentNode;
        parent.remove();
    }

}