var L9;
(function (L9) {
    var inputField = document.getElementById("inputField");
    //Inputfield für die EingabeTaste "Enter" für jede neue Aufgabe
    inputField.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            createNewTask();
            inputField.value = " ";
        }
    });
    // var für den Counter --> 0 als Ausgangspunkt
    var changeCounter = 0;
    //Funktion für neue To Dos!
    function createNewTask() {
        //Div --> Elemente --> "wrapper"
        var myDiv = document.createElement("div");
        myDiv.className = "myDiv";
        //Checkbox
        var myCheckbox = document.createElement("input");
        myCheckbox.type = "checkbox";
        myCheckbox.className = "checkboxField";
        //Label
        var myLabel = document.createElement("label");
        myLabel.className = "myClass";
        myLabel.innerHTML = inputField.value;
        //Trash
        var myTrash = document.createElement("i");
        myTrash.className = "fas fa-trash";
        //MyDiv --> alle Elemente (box, label, trash)
        myTrash.addEventListener("click", function () {
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
    function removeTask(wrapper) {
        wrapper.remove();
        // Task -1 zählen, runterzählen, nachdem ein div gelöscht wird --> count Tasks angewendet
        changeCounter--;
        countTasks();
    }
    //Tasks zählen
    function countTasks() {
        document.getElementById("taskNumber").innerHTML = changeCounter + " open tasks";
    }
})(L9 || (L9 = {}));
//# sourceMappingURL=scriptA9.js.map