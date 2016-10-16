import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// Import de la class du routing : à propos des routes https://goo.gl/FbKYVx
import { Router } from './app.routing';

import { AppComponent }  from './app.component';
import { TodoDirective }  from './directives/todo.directive';
import { ArchiveDirective }  from './directives/archive.directive';

// Import du service pour les routes dynamiques : à propos des routes dynamiques https://goo.gl/Qe53YN
import { TodoService } from './services/todos.service';

// Import directive
import { ToDoListComponent } from './components/todolist.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, Router],
  declarations: [ AppComponent, TodoDirective, ArchiveDirective, ToDoListComponent],
  providers: [ TodoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
