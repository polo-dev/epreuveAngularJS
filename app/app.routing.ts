/**
 * Created by polo on 16/10/2016.
 */
// Création des routes : à propos des routes https://goo.gl/FbKYVx
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoDirective }  from './directives/todo.directive';
import { ArchiveDirective }  from './directives/archive.directive';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoDirective
  },
  {
    path: 'archive',
    component: ArchiveDirective
  }

];

export const Router: ModuleWithProviders = RouterModule.forRoot(appRoutes);
