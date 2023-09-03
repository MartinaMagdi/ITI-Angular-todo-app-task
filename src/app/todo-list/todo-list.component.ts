import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todoList: any;

  @Output() deleteTodoEvent = new EventEmitter();

  @Output() completeTodoEvent = new EventEmitter();

  @Output() undoTodoEvent = new EventEmitter();

  deleteTodo(id: number) {
    this.deleteTodoEvent.emit(id);
  }

  completeTodo(id: number) {
    this.completeTodoEvent.emit(id);
  }

  undoTodo(id: number) {
    this.undoTodoEvent.emit(id);
  }
}
