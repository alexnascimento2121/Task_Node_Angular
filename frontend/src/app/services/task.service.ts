import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private API_URL = 'http://localhost:3000/api/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL);
  }

  addTask(title: string): Observable<Task> {
    return this.http.post<Task>(this.API_URL, { title });
  }

  completeTask(id: number): Observable<Task> {
    return this.http.put<Task>(`${this.API_URL}/${id}`, {});
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
