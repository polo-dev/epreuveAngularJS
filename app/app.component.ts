import { Component, Input, Output, EventEmitter} from '@angular/core';

//models
import { toDoItem } from './models/todolist.item';

//import service todo
import { TodoService } from './services/todos.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/index.html',
  providers: [TodoService]
})
export class AppComponent {

  title       = 'Liste des taches';
  titleNotDo     = 'Taches réalisé';
  titleDo  = 'Taches à faire';
  toDoList: toDoItem[];
  notToDoList: toDoItem[];

  toList (toDo:toDoItem)
  {
    toDo.state = !toDo.state;
    this.toDoList = this.todoService.getToDo();
    this.notToDoList = this.todoService.getNotToDo();
  }

  constructor(
    private todoService: TodoService
  )
  {
    this.toDoList = this.todoService.getToDo();
    this.notToDoList = this.todoService.getNotToDo();
  }

}
