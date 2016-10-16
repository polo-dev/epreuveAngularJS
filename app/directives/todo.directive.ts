/**
 * Created by polo on 16/10/2016.
 */
import { Component } from '@angular/core';

import { toDoItem } from "../models/todolist.item";
import { TodoService } from '../services/todos.service';


@Component({
  selector: 'index-page',
  templateUrl: 'app/views/components/todo.html',
  providers: [TodoService],
})


export class TodoDirective {

  title       = 'Liste des taches';
  titleDo     = 'Taches à faire';
  toDoList: toDoItem[];
  newToDo: toDoItem;

  toList (toDo:toDoItem)
  {
    toDo.state = !toDo.state;
    this.toDoList = this.todoService.getToDo();
  }

  resetInput(){
    this.newToDo = {id: 0, task: '', state: false};
    this.toDoList = this.todoService.getToDo();
  }

  addToDo() {
    this.todoService.addToDo(this.newToDo);
    this.resetInput();
  }

  constructor(
    private todoService: TodoService
  )
  {
    this.toDoList = this.todoService.getToDo();
    this.resetInput();
  }
}
