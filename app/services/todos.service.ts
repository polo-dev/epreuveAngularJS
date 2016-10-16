// Création du service : à propos des services https://goo.gl/uz1cpM
import { Injectable } from '@angular/core';

// Import des class utilisées dans le service
import { toDoItem } from "../models/todolist.item";
import { TODOS } from '../datas/todolist.data';

// Injecter le service dans l'application
@Injectable()

// Export du service
export class TodoService {

  // Ajoute une tache à la liste des todo
  addToDo(todo:toDoItem){
    TODOS.push(todo);
    console.log(TODOS);
  }

  // Supprime une tache de la liste des todo
  deleteToDo(todo:toDoItem)
  {
    for(var i = 0; i < TODOS.length; i++) {
      var obj = TODOS[i];

      if(obj.id === todo.id) {
        TODOS.splice(i, 1);
      }
    }

    return this.getNotToDo();
  }

  // Retourne la liste des tâches à faires
  getToDo(): toDoItem[]{
    var toDoList: toDoItem[];
    toDoList = [];
    for(var todo in TODOS)
    {
      if(!TODOS[todo].state)
      {
        toDoList.push(TODOS[todo]);
      }
    }

    // console.log(toDoList);
    return toDoList;
  }

  // Retourne la liste des tâches effectués
  getNotToDo(): toDoItem[]{
    var notToDoList: toDoItem[];
    notToDoList = [];
    for(var todo in TODOS)
    {
      if(TODOS[todo].state)
      {
        notToDoList.push(TODOS[todo]);
      }
    }

    return notToDoList;
  }
};
