import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`${API_URL}/jpa/users/${username}/todos`);
  }

  deleteATodo(id: number, username: string) {
      return this.http.delete(`${API_URL}/jpa/users/${username}/todos/${id}`);
  }

  retrieveATodo(id: number, username: string) {
    return this.http.get<Todo>(`${API_URL}/jpa/users/${username}/todos/${id}`);
}

  updateATodo(id: number, username: string, todo: Todo) {
  return this.http.put<Todo>(`${API_URL}/jpa/users/${username}/todos/${id}`, todo);
}

  createATodo(username: string, todo: Todo) {
    return this.http.post(`${API_URL}/jpa/users/${username}/todos`, todo);
}


}
