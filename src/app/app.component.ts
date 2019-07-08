import { Component } from '@angular/core';
import { splitClasses } from '@angular/compiler';

interface TaskInterface {
  ToDo: string;
  Complete: boolean;
}

let taskInput;

@Component({
  selector: 'ToDoComponent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'to-do-list';

  // taskInput = new TaskInterface {
  //   ToDo: null;
  //   Complete: false;
  // };

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

  completeTask(array, item) {
    array[item].Complete = true;
  }

  removeTask(array, item) {
    array.splice(item, 1);
  }

  addTask(array) {
    const newToDo: TaskInterface = {
      ToDo: taskInput,
      Complete: false
    }
    array.push(newToDo);
    console.log(newToDo);
    console.log(array);
  }
}
