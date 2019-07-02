import { Component } from '@angular/core';

interface TaskInterface {
  ToDo: string;
  Complete: boolean;
}

@Component({
  selector: 'ToDoComponent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'to-do-list';

  toDoList: TaskInterface[] = [
    {
      ToDo: "Walk the dog.",
      Complete: false
    },
    {
      ToDo: "Go to the store.",
      Complete: true
    },
    {
      ToDo: "Get gas.",
      Complete: false
    },
    {
      ToDo: "Wash the car.",
      Complete: false
    }
  ]
}
