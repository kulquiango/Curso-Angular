import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map, catchError, of, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private _user: any = null;
  private baseUrl = environment.baseUrl;

  get user() {
    return this._user;
  }

  login(data: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/auth/login`, data).pipe(
      tap((res) => {
        if (res.ok === true) {
          this._user = {
            id: res.id,
            username: res.username,
            token: res.token,
          };
        }
      }),
      map((res) => res.ok),
      catchError((err) => of(err.error.message))
    );
  }

  register(data: any) {
    return this.httpClient
      .post<any>(`${this.baseUrl}/auth/register`, data)
      .pipe(
        tap((res) => {
          if (res.ok === true) {
            this._user = {
              id: res.id,
              username: res.username,
              token: res.token,
            };
          }
        }),
        map((res) => res.ok),
        catchError((err) => of(err.error.message))
      );
  }

  validatorToken(): Observable<boolean> {
    const token = JSON.parse(localStorage.getItem('user')!);
    if (token) {
      return new Observable((subscriber) => {
        subscriber.next(true);
      });
    } else {
      return new Observable((subscriber) => {
        subscriber.next(false);
      });
    }
  }
}
