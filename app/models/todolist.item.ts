/** Created by polo on 16/10/2016. */
//Model de l'objet todolist
export class toDoItem {
  public id: number;
  public task: string;
  public state: boolean;

  constructor(data: any) {
    this.id = data.id;
    this.task = data.task;
    this.state = data.state;
  }
}
