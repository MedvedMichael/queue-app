import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class BackendQueueService {
  private readonly apiBase = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getQueue(): Observable<User[]> {
    return this.http.get<User[]>(this.apiBase);
  }

  addUserToQueue(user: User): Observable<Object> {
    return this.http.post(`${this.apiBase}/add`, user);
  }

  removeUserFromQueue(email: string) {
    return this.http.delete(`${this.apiBase}/remove`, {
      body: { email },
    });
  }
}
