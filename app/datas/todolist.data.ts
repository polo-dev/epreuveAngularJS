/**
 * Created by polo on 16/10/2016.
 */
// Import du model de donnée utilisé dans la collection
import {toDoItem} from "../models/todolist.item";

// Création d'une collection de données'
  export const TODOS: toDoItem[] = [
  new toDoItem({id: 1, task: 'faire user story 1', state: true}),
  new toDoItem({id: 2, task: 'Finir l\'épreuve', state: false}),
  new toDoItem({id: 3, task: 'Prendre un café', state: false}),
  new toDoItem({id: 4, task: 'Acheter la samsung gear 3', state: false}),
];

