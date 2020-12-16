var L9;
(function (L9) {
    var inputField = document.getElementById("inputField");
    inputField.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            createNewToDo();
        }
    });
    function createNewToDo() {
        var myCheckbox = document.createElement("input");
        myCheckbox.type = "checkbox";
        var myLabel = document.createElement("label");
        myLabel.className = "myClass";
        myLabel.innerHTML = inputField.value;
        document.getElementById("toDoForm").appendChild(myCheckbox);
        document.getElementById("toDoForm").appendChild(myLabel);
    }
})(L9 || (L9 = {}));
//# sourceMappingURL=scriptA9.js.map