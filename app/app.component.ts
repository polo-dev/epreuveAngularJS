import { Component } from '@angular/core';


//import service todo
import { TodoService } from './services/todos.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/index.html',
  providers: [TodoService]
})
export class AppComponent {

}
