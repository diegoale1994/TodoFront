import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteATodo(id: number, username: string) {
      return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveATodo(id: number, username: string) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
}

  updateATodo(id: number, username: string, todo: Todo) {
  return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`, todo);
}

  createATodo(username: string, todo: Todo) {
  return this.http.post(`http://localhost:8080/users/${username}/todos`, todo);
}


}
