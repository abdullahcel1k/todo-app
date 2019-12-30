import { Injectable } from '@angular/core';
import { AppConstants } from '../constants/app.constant';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private appConstants: AppConstants,
    private httpClient: HttpClient) { }
  
  getTodos(){
    return this.httpClient.get<ApiResponse>(this.appConstants.API+'todo/todolist')
      .toPromise();
  }

  addTodo(todo: Todo){
    return this.httpClient.post<ApiResponse>(this.appConstants.API+'todo/addtodo', todo)
      .toPromise();
  }

  getTodoDetail(todoId: number){
    return this.httpClient.get<ApiResponse>(this.appConstants.API+'todo/gettodo/'+todoId)
      .toPromise();
  }

  deleteTodo(todoId: number){
    return this.httpClient.put<ApiResponse>(this.appConstants.API+'todo/deletetodo/'+todoId, null)
      .toPromise();
  }

  updateTodo(todoId, todo: Todo){
    return this.httpClient.put<ApiResponse>(this.appConstants.API+'todo/updatetodo/'+todoId, todo)
      .toPromise();
  }
}
