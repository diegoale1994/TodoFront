import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AUTHENTICATED_USER } from '../service/basic-authentication.service.';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;
  constructor(private todoDataService: TodoDataService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.todo = new Todo(this.activatedRoute.snapshot.params.id, '', sessionStorage.getItem(AUTHENTICATED_USER), false, new Date());
    if (+this.activatedRoute.snapshot.params.id !== -1) {
      this.todoDataService.retrieveATodo(this.activatedRoute.snapshot.params.id,
        sessionStorage.getItem(AUTHENTICATED_USER)).subscribe(todo => {
        this.todo = todo;
      });
    }
  }

  saveTodo() {
    if (+this.activatedRoute.snapshot.params.id === -1) {
        console.log(this.todo);
        this.todoDataService.createATodo(sessionStorage.getItem(AUTHENTICATED_USER), this.todo).subscribe(data => {
          this.router.navigate(['/todos']);
        });
    } else {
      this.todoDataService.updateATodo(this.activatedRoute.snapshot.params.id,
        sessionStorage.getItem(AUTHENTICATED_USER), this.todo).subscribe(todo => {
        this.router.navigate(['/todos']);
      });
    }
  }

}
