namespace L10 {

    /*Interface!!! für beide Arrays/ für die Objekte 
    -> Liste der Eigenschften; ohne Werte definiert 
    -> Key:Type
    -> direkter Zugriff auf "Objekte"*/
    interface allToDos {
        todosText: string;
        todosChecked: boolean; // true vs false
    }
    /*Variable (let) für -> alle Objekte(Instanzen),
     die innerhalb des Arrays erstellt werden,
     werden hier hinzugefügt
     --> es bezieht sich auf das Interface!*/
    let allToDosObjects: allToDos[] = [
        //bereits deklarierte Objekte:
        {
            todosText: ":)",
            todosChecked: true //true = checked
        },
        {
            todosText: "nichts machen",
            todosChecked: true
        },
        {
            todosText: "nichts unternehmen",
            todosChecked: false // false = not checked
        },
        {
            todosText: "untätig bleiben",
            todosChecked: false
        }
    ];
    /**
     * Die Anwendung wird immer wieder auf die selben
     * DOM-Elemente zugreifen müssen. Damit diese Elemente nicht 
     * jedes mal neu selektiert werden müssen, werden hier
     * Variablen deklariert, die später die entsprechenden DOM-Elemente
     * speichern.
     */
    //Variablen
    let inputDOMElement: HTMLInputElement;
    let addButtonDOMElement: HTMLElement;
    let todosDOMElement: HTMLElement;
    let counterDOMElement: HTMLElement;
    //L11
    let doneToDoDOMElement: HTMLElement;
    let openToDoDOMElement: HTMLElement;
    
    //Artyom -Sprachassistent-
    //Ohne zu stopepn/ continuous
    declare var Artyom: any;

    window.addEventListener("load", function (): void {
        const artyom: any = new Artyom();
        
        //Fuktion
        function startContinuousArtyom(): void {
            artyom.fatality();

            setTimeout(
                function (): void {
                    artyom.initialize({
                        lang: "de-DE",
                        continuous: true,
                        listen: true,
                        interimResults: true,
                        debug: true
                    }).then(function (): void {
                        console.log("Ready!");
                    });
                },
                250);
        }
        startContinuousArtyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i: any, wildcard: string): void {
                /*wildcard = neue Objekte,
                 die sprachlich eingegeben werden*/
                /*ansprechen der Var allToDOsObjects,
                 damit neue Objekte dort deklariert
                und am Anfang (unshift) hinzugefügt werden
                ++ es wird nicht als checked markiert*/
                allToDosObjects.unshift({
                    todosText: wildcard,
                    todosChecked: false
                });
                drawListToDOM();
                //artyom.say == sprachliche Ausgabe des Textes vom Sprachassistenten
                artyom.say("deine Aufgabe" + wildcard + " wurde ergänzt");
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
            }
        });
        //Button für die Aktivierung der Sprachaufnahme von Artyom
        //id wird hier deklariert --> funktion durch "click" ausgelöst
        document.getElementById("VoiceCommands").addEventListener("click", function (): void {
            /*Sprachausgabe wenn Artyom aktiviert wird,
            nachdem auf dem Button gedrückt wird*/
            artyom.say("Sprachbefehl aktiviert");
            startContinuousArtyom();
            console.log("Sprachassistent ist aktiviert");
        });
    });

    /**
     * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
     * initialisiert werden
     */
    window.addEventListener("load", function (): void {
        /**
         * Jetzt da der DOM verfügbar ist können die wichtigsten Elemente
         * in ihre Variablen gespeichert werden, um später auf sie 
         * zugreifen zu können
         */
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        //L11
        //neue DOM Elemente für done/open
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
    //drawListToDOM Funktion?????
    function drawListToDOM(): void {
        // alle todos erst einmal aus dem DOM löschen
        todosDOMElement.innerHTML = "";
        // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
        for (let index: number = 0; index < allToDosObjects.length; index++) {
            /**
             * Neues DIV-Element erstellen (würde auch mit innerHTML = "<div class='todo'></div>" gehen, 
             * die Objekt-Instansierung ist aber übersichtlicher)
             */
            let todo: HTMLElement = document.createElement("div");
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
            todo.querySelector(".check").addEventListener("click", function (): void {
                // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
                // übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function (): void {
                // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
                // übergeben, damit die entsprechende Stelle im Array gelöscht werden kann.
                deleteTodo(index);
            });
            // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
            todosDOMElement.appendChild(todo);
        }
        updateCounter();
    }
    //Counter
    function updateCounter(): void {
        /*L11 
        -> Variablen für "open" und "done" Zähler erstellen
        -> lokal innerhalb der Funktion
        -> 0 */
        let openNumber: number = 0;
        let doneNumber: number = 0;
        /*1. if/else Bedingung für die Bezeichnung done und undone der Objekten
        2. der Zustand: 
        checked = done = false
        unchecked = open = true
        3. "if" der Zustand ist checked/ done ist es "false" und opneNumber Zhhler geht +1(++),
        wenn es "false" ist dann tritt "else", openNumber Zähler ghet +1(++)
        4. var index deklariert, index ist kleiner als "in total" tasks, geht +1 hoch
        5. wenn done number hochgeht, dann geht open number runter,
        (umgekehrt) wenn open number hoch geht, geht done number runter*/
        for (let index: number = 0; index < allToDosObjects.length; index++) {
            if (allToDosObjects[index].todosChecked == false) {
                openNumber++;
            }
            else {
                doneNumber++;
            }
        }
        //L10
        counterDOMElement.innerHTML = allToDosObjects.length + " in total";
        //L11 --> Zugriff aud done und open Elemente
        doneToDoDOMElement.innerHTML = doneNumber + " done";
        openToDoDOMElement.innerHTML = openNumber + " open";
    }
    /**
     * Ein neues ToDo wird folgendermaßen erstellt:
     */
    function addTodo(): void {
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
    function toggleCheckState(index: number): void {
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
    function deleteTodo(index: number): void {
        /**
         * Durch "index" ist die entsprechende Stelle im Array
         * bekannt, an der das ToDo steht.
         * Jetzt muss diese Stelle beider Arrays gelöscht werden,
         * das ToDo-Text-Array und das Checked/Unchecked-Array
         ->L10 --> 2 mit 1 ersetzt!
         */
        allToDosObjects.splice(index, 1);
        /**
         * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
         * wird wieder getriggert
         */
        drawListToDOM();
    }
}