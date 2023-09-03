import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  newTodo: string = '';
  @Output() addTodoEvent = new EventEmitter();

  addTodo() {
    this.addTodoEvent.emit(this.newTodo);
    this.newTodo = '';
  }
}
