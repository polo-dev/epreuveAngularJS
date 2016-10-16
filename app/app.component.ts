import { Component, Input, Output, EventEmitter} from '@angular/core';

//models
import { toDoItem } from './models/todolist.item';

//import service todo
import { TodoService } from './services/todos.service';
import {TODOS} from "./datas/todolist.data";

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/index.html',
  providers: [TodoService]
})
export class AppComponent {

  title       = 'Liste des taches';
  titleNotDo     = 'Taches réalisé';
  titleDo  = 'Taches à faire';
  toDoList: toDoItem[]; // Liste des tâches à faires
  notToDoList: toDoItem[]; // Liste des tâches réalisées
  newToDo: toDoItem;

  // Un simple changement d'état passe le todo en effectués et vice versa
  // Le todo n'est pas supprimé, mais n'apparait plus dans la liste pour l'utilisateur
  toList (toDo:toDoItem)
  {
    toDo.state = !toDo.state;
    this.toDoList = this.todoService.getToDo();
    this.notToDoList = this.todoService.getNotToDo();
  }

  // Ajoute un todo à la liste des choses à faire
  addToDo() {
    this.todoService.addToDo(this.newToDo);
    this.resetInput();
  }


  // Initialise ou réinitialise l'input d'ajout de taches à faire
  resetInput(){
    // Incrémentation du todo
    this.newToDo = {id: TODOS[TODOS.length -1].id + 1, task: '', state: false};
    this.toDoList = this.todoService.getToDo();
    this.notToDoList = this.todoService.getNotToDo();
  }

  // Le constructeur permet d'injecter les listes des todo
  constructor(
    private todoService: TodoService
  )
  {
    this.toDoList = this.todoService.getToDo();
    this.notToDoList = this.todoService.getNotToDo();
    this.resetInput();
  }

}
