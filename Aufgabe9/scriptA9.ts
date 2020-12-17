namespace L9{
    
const inputField: HTMLInputElement = (document.getElementById("inputField") as HTMLInputElement);

inputField.addEventListener("keypress", function (event: KeyboardEvent): void {
if (event.key == "Enter") {
    createNewToDo();
}    
});

function createNewToDo(): void {
    let myCheckbox: HTMLInputElement = document.createElement("input");
    myCheckbox.type = "checkbox";
    let myLabel: HTMLLabelElement = document.createElement("label");
    myLabel.className = "myClass";
    myLabel.innerHTML = inputField.value;
    document.getElementById("toDoForm").appendChild(myCheckbox);
    document.getElementById("toDoForm").appendChild(myLabel);
    let deleteButton: HTMLInputElement = document.createElement("input");
    deleteButton.className = "fas fa-trash";
}



}



















