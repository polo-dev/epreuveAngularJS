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
  newToDo: toDoItem;

  toList (toDo:toDoItem)
  {
    toDo.state = !toDo.state;
    this.notToDoList = this.todoService.getNotToDo();
  }

  resetInput(){
    this.newToDo = {id: 0, task: '', state: false};
    this.notToDoList = this.todoService.getNotToDo();
  }

  addToDo() {
    this.todoService.addToDo(this.newToDo);
    this.resetInput();
  }

  constructor(
    private todoService: TodoService
  )
  {
    this.notToDoList = this.todoService.getNotToDo();
    this.resetInput();
  }
}
