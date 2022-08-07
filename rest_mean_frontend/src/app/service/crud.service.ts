import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient, private router: Router) {}
  get user() {
    return this.readToken();
  }

  readToken(): any {
    return JSON.parse(localStorage.getItem('user')!);
  }

  read() {
    const headers = { 'x-auth-token': this.user.token };
    return this.httpClient.get<any>(`${this.baseUrl}/task/read`, { headers });
  }

  delete(id: string) {
    const headers = { 'x-auth-token': this.user.token };
    return this.httpClient.delete<any>(`${this.baseUrl}/task/delete/${id}`, {
      headers,
    });
  }

  create(value: string) {
    const headers = { 'x-auth-token': this.user.token };
    return this.httpClient.post<any>(
      `${this.baseUrl}/task/create`,
      { name: value },
      { headers }
    );
  }

  update(id: string, value: string) {
    const headers = { 'x-auth-token': this.user.token };
    return this.httpClient.put<any>(
      `${this.baseUrl}/task/update/${id}`,
      { name: value },
      { headers }
    );
  }
}
