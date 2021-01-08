var L10;
(function (L10) {
    /*Variable (let) -> alle Objekte(Instanzen),
     die innerhakb des Arrays erstellt werden*/
    var allToDosObjects = [
        //deklarierte Objekte:
        {
            todosText: ":)",
            todosChecked: true,
        },
        {
            todosText: "Lorem",
            todosChecked: true,
        },
        {
            todosText: "Ipsum",
            todosChecked: false,
        },
        {
            todosText: "Dolor",
            todosChecked: false,
        },
    ];
    /**
     * Die Anwendung wird immer wieder auf die selben
     * DOM-Elemente zugreifen müssen. Damit diese Elemente nicht
     * jedes mal neu selektiert werden müssen, werden hier
     * Variablen deklariert, die später die entsprechenden DOM-Elemente
     * speichern.
     */
    //Variablen
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    //Aufgabe11
    var doneToDoDOMElement;
    var openToDoDOMElement;
    /**
     * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
     * initialisiert werden
     */
    window.addEventListener("load", function () {
        /**
         * Jetzt da der DOM verfügbar ist können die wichtigsten Elemente
         * in ihre Variablen gespeichert werden, um später auf sie
         * zugreifen zu können
         */
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        //Aufgabe11
        doneToDoDOMElement = document.querySelector("#doneToDo");
        openToDoDOMElement = document.querySelector("#openToDo");
        /**
         * Jetzt da der DOM verfügbar ist kann auch ein Event-Listener
         * auf den AddToDo Button gesetzt werden.
         */
        addButtonDOMElement.addEventListener("click", addTodo);
        /**
         * Initial soll einmal die Liste an bereit definierten ToDos
         * aus den Arrays in den DOM gezeichnet werden.
         */
        drawListToDOM();
    });
    function drawListToDOM() {
        // alle todos erst einmal aus dem DOM löschen
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index) {
            /**
             * Neues DIV-Element erstellen (würde auch mit innerHTML = "<div class='todo'></div>" gehen,
             * die Objekt-Instansierung ist aber übersichtlicher)
             */
            var todo = document.createElement("div");
            todo.classList.add("todo");
            /**
             * Jedes Todo besteht aus etwas Markup, also aus HTML-Elementen
             * wie der Check-Anzeige, dem ToDo-Text und dem Mülleimer
             *
             * Einfachheitshalber werden hier alle HTML-Elemente für ein ToDo
             * nicht DOM-Objekt-weise (wie oben, mit createElement), sondern als eine lange
             * HTML-Zeichenkette erstellt. An manchen Stellen der Zeichenkette wird
             * ein Wert einer Variablen benötigt (bspw. für die CSS Klasse oder für den ToDo-Text),
             * hier muss die Zeichenkette unterbrochen werden.
             */
            todo.innerHTML = "<span class='check " + allToDosObjects[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                + allToDosObjects[index].todosText +
                "<span class='trash fas fa-trash-alt'></span>";
            // Zuweisen der Event-Listener für den Check- und den Trash-Button
            todo.querySelector(".check").addEventListener("click", function () {
                // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
                // übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
                // übergeben, damit die entsprechende Stelle im Array gelöscht werden kann.
                deleteTodo(index);
            });
            // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
            todosDOMElement.appendChild(todo);
        };
        // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
        for (var index = 0; index < allToDosObjects.length; index++) {
            _loop_1(index);
        }
        updateCounter(); //??
    }
    //Counter
    function updateCounter() {
        /*Aufgabe11
        -> Variablen für "open" und "done" Zähler erstellen*/
        var openNumber = 0;
        var doneNumber = 0;
        /*1. if/else Bedingung für die Bezeichnung done und undone der Objekten
        2. der Zustand:
        checked = done = false
        unchecked = open = true
        3. "if" der Zustand ist checked/ done ist es "false" und opneNumber Zhhler geht +1(++),
        wenn es "false" ist dann tritt "else", openNumber Zähler ghet +1(++)
        4. var index deklariert, index ist kleiner als "in total" tasks, geht +1 hoch*/
        for (var index = 0; index < allToDosObjects.length; index++) {
            if (allToDosObjects[index].todosChecked == false) {
                openNumber++;
            }
            else {
                doneNumber++;
            }
        }
        //L10
        counterDOMElement.innerHTML = allToDosObjects.length + " in total";
        //Aufgabe11 --> done und open
        doneToDoDOMElement.innerHTML = doneNumber + " done";
        openToDoDOMElement.innerHTML = openNumber + " open";
    }
    /**
     * Ein neues ToDo wird folgendermaßen erstellt:
     */
    function addTodo() {
        /**
         * Zunächst wird geprüft, ob das Input-Feld nicht leer ist
         * (ansonsten würde ein leerer ToDo-Text erstellt werden,
         * wenn man, ohne zu Tippen, den Add-Button gedrückt hätte)
         */
        if (inputDOMElement.value != "") {
            /*.unshift-> Adds one or more elements to the front of an array
            and returns the new length of the array*/
            // checked= false vs unchecked= open!
            //L10
            allToDosObjects.unshift({
                todosText: inputDOMElement.value,
                todosChecked: false
            });
            /**
             * Der Eingabe-Wert aus dem Input-Feld (.value) wird
             * als neues Element in das ToDo-Array gepusht.
             * Gleichzeitig wird in ein zweites Array, das den Checked- / Uncheck-
             * Status der ToDos abbildet, für dieses ToDo (weil selbe Stelle im Array)
             * der Status "unchecked", hier false, gepusht.
             */
            // Jetzt wird der Text aus dem Eingabefeld gelöscht
            inputDOMElement.value = "";
            /**
             * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
             * wird wieder getriggert
             */
            drawListToDOM();
        }
    }
    /**
     * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
     */
    function toggleCheckState(index) {
        /**
         * Das Array, , das den Checked- / Uncheck-Status der ToDos abbildet,
         * muss an jener Stelle, an der das entsprechende ToDo steht (nämlich
         * an der übergebenen Index-Stelle) geändert werden.
         * Von checked zu unchecked bzw. von unchecked zu checked
         * Hier wird ein Boolean für den Zustand checked/unchecked genutzt,
         * der Boolean muss also von true zu false bzw. false zu true gestellt werden.
         * Ein toggle (also Welchseln zwischen zwei Zuständen) lässt sich folgendermaßen
         * kurz schreiben: wert = !wert
         * Bedeutet: der Wert soll das Gegenteil von seinem Wert annehmen.
         * Alternativ könnte man hier natürlich auch andere Schreibweisen (wie sie im
         * Kurs behandelt wurden) nutzen.
         */
        allToDosObjects[index].todosChecked = !allToDosObjects[index].todosChecked;
        /**
         * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
         * wird wieder getriggert
         */
        drawListToDOM();
    }
    /**
     * Diese Funktion löscht ein ToDo
     */
    function deleteTodo(index) {
        /**
         * Durch "index" ist die entsprechende Stelle im Array
         * bekannt, an der das ToDo steht.
         * Jetzt muss diese Stelle beider Arrays gelöscht werden,
         * das ToDo-Text-Array und das Checked/Unchecked-Array
         */
        allToDosObjects.splice(index, 1);
        /**
         * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
         * wird wieder getriggert
         */
        drawListToDOM();
    }
})(L10 || (L10 = {}));
//# sourceMappingURL=script.js.map