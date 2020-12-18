namespace L9{
    
const inputField: HTMLInputElement = (document.getElementById("inputField") as HTMLInputElement);


//Inputfield für die EingabeTaste "Enter" für jede neue Aufgabe

inputField.addEventListener("keypress", function (event: KeyboardEvent): void {
if (event.key == "Enter") {
    createNewTask();
    inputField.value = " ";
}    
});

// var für den Counter --> 0 als Ausgangspunkt
let changeCounter: number = 0;

//Funktion für neue To Dos!
function createNewTask(): void {

    //Div --> Elemente --> "wrapper"
    let myDiv: HTMLDivElement = document.createElement("div");
    myDiv.className = "myDiv"; 
    
    //Checkbox
    let myCheckbox: HTMLInputElement = document.createElement("input");
    myCheckbox.type = "checkbox";
    myCheckbox.className = "checkboxField";
    
    //Label
    let myLabel: HTMLLabelElement = document.createElement("label");
    myLabel.className = "myClass";
    myLabel.innerHTML = inputField.value;
    
    //Trash
    let myTrash: HTMLElement = document.createElement("i");
    myTrash.className = "fas fa-trash";

    //MyDiv --> alle Elemente (box, label, trash)
    myTrash.addEventListener("click", function(): void {
    console.log("trash");
    removeTask(myDiv);
    });

    //getting Ellements --> "child" "appenden" an die Objekte 
    //my.div zugriff, nicht merh HTML
    document.getElementById("toDoFrom").appendChild(myDiv);   
    myDiv.appendChild(myCheckbox);
    myDiv.appendChild(myLabel);
    myDiv.appendChild(myTrash);
    
    
    //Task +1 zählen, hochzählen, + open Tasks ausgeben 
    changeCounter++;
    countTasks();
}

//Funktion für das Löschen der ToDos --> ".remove"
function removeTask(wrapper: HTMLDivElement): void {
    wrapper.remove(); 

    // Task -1 zählen, runterzählen, nachdem ein div gelöscht wird --> count Tasks angewendet
    changeCounter--;
    countTasks();
}

//Tasks zählen
function countTasks(): void {
    document.getElementById("taskNumber").innerHTML = changeCounter + " open tasks";
}

}



















