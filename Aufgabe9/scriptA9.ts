namespace L9{
    
const inputField: HTMLInputElement = (document.getElementById("inputField") as HTMLInputElement);

inputField.addEventListener("keypress", function (event: KeyboardEvent): void {
if (event.key == "Enter") {
    createNewTask();
}    
});

function createNewTask(): void {
    let myCheckbox: HTMLInputElement = document.createElement("input");
    myCheckbox.type = "checkbox";

    let myLabel: HTMLLabelElement = document.createElement("label");
    myLabel.className = "myClass";
    myLabel.innerHTML = inputField.value;
    
    let myTrash: HTMLElement = document.createElement("p");
    myTrash.className = ("fas fa-trash");



    document.getElementById("toDoForm").appendChild(myCheckbox);
    document.getElementById("toDoForm").appendChild(myLabel);
    document.getElementById("toDoForm").appendChild(myTrash);

}



}



















