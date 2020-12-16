namespace L9{

    let test: number = 0;

interface todo{
      title: string;
      done: boolean;
    }

let todos: todo[] = [
{ 
title: 'Geschenke',
done: true, 
},
{
title: 'Glühwein',
done: true,
},
{
title: 'mehr Alkohol kaufen',
done: false,
}
];

for (let i: number = 0; i< todos.length; i++){
    document.querySelector(".todoListe ul").innerHTML += "<li>" + todos[i].title + "[" + todos[i].done + "] </li>";
}
}



















}