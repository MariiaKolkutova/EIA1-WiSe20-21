var L9;
(function (L9) {
    var inputField = document.getElementById("inputField");
    inputField.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            createNewTask();
        }
    });
    function createNewTask() {
        var myCheckbox = document.createElement("input");
        myCheckbox.type = "checkbox";
        var myLabel = document.createElement("label");
        myLabel.className = "myClass";
        myLabel.innerHTML = inputField.value;
        /*let myTrash: HTMLElement = document.createElement("p");
        myTrash.className = ("fas fa-trash");
        myTrash.classList.add("fas fa-trash");*/
        document.getElementById("toDoForm").appendChild(myCheckbox);
        document.getElementById("toDoForm").appendChild(myLabel);
        //document.getElementById("toDoForm").appendChild(myTrash);
    }
})(L9 || (L9 = {}));
//# sourceMappingURL=scriptA9.js.map