/**
 * Created by polo on 16/10/2016.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";

import {toDoItem} from "../models/todolist.item";

@Component({
  selector: 'todo-item',
  templateUrl: 'app/views/components/partials/todolist.html',
})

export class ToDoListComponent {

  @Input() todo: toDoItem;
  @Output() sendToDoDetail = new EventEmitter();

  toList(event: Event){
    this.sendToDoDetail.emit(this.todo);
  }
}
