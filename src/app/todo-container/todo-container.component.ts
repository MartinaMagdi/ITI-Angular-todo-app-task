import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
})
export class TodoContainerComponent {
  id: number = 1;
  todoList: Array<any> = [];

  addTodo(todo: any) {
    let newTodo = {
      id: this.id++,
      title: todo,
      completed: false,
    };

    this.todoList.push(newTodo);
  }

  deleteTodo(id: number) {
    const selectedItem = this.todoList.findIndex((item) => item.id === id);
    this.todoList.splice(selectedItem, 1);
  }

  completeTodo(id: number) {
    this.todoList = this.todoList.map((item) => {
      if (item.id === id) {
        return { ...item, completed: true };
      }
      return item;
    });
  }

  undoTodo(id: number) {
    this.todoList = this.todoList.map((item) => {
      if (item.id === id) {
        return { ...item, completed: false };
      }
      return item;
    });
  }
}
