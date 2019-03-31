import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { AUTHENTICATED_USER } from '../service/basic-authentication.service.';

import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn } from 'ngx-animate';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public username: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
  animations: [
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))])
  ],
})

export class ListTodosComponent implements OnInit {
  zoomIn: any;
  todos: Todo[];
  message: string;
  constructor(private todoDataService: TodoDataService,
              private router: Router) { }

  ngOnInit() {
  this.getAllTodos();
  }

  getAllTodos() {
    this.todoDataService.retrieveAllTodos(sessionStorage.getItem(AUTHENTICATED_USER)).subscribe(Todos => {
      this.todos = Todos;
    });
  }

  deleteTodo(id: number) {
    this.todoDataService.deleteATodo(id, 'zchuldiner').subscribe(response => {
      console.log(response);
      this.message = 'Todo deleted Correctly';
      this.getAllTodos();
      // this.todos = this.todos.filter(cli => cli !== cliente)
    });
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

  create() {
    this.router.navigate(['todos', -1]);
  }

}
