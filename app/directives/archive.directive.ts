import { Component } from '@angular/core';

import {toDoItem} from "../models/todolist.item";
import { TodoService } from '../services/todos.service';


@Component({
  selector: 'index-page',
  templateUrl: 'app/views/components/archive.html',
  providers: [TodoService],
})


export class ArchiveDirective {

  title         = 'Liste des taches';
  titleNotDo    = 'Taches réalisé';
  notToDoList: toDoItem[];

  // Change le statut d'une tache
  toList (toDo:toDoItem)
  {
    toDo.state = !toDo.state;
    this.notToDoList = this.todoService.getNotToDo();
  }

  //delete une tache
  deleteToDo(todo:toDoItem)
  {
    this.notToDoList = this.todoService.deleteToDo(todo);
  }


  constructor(
    private todoService: TodoService
  )
  {
    this.notToDoList = this.todoService.getNotToDo();
  }
}
