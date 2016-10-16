// Création du service : à propos des services https://goo.gl/uz1cpM
import { Injectable } from '@angular/core';

// Import des class utilisées dans le service
import { toDoItem } from "../models/todolist.item";
import { TODOS } from '../datas/todolist.data';

// Injecter le service dans l'application
@Injectable()

// Export du service
export class TodoService {

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

    console.log(toDoList);
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
