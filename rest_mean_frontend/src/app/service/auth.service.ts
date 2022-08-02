import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private _user: any = null;

  get user() {
    return this._user;
  }

  login(data: any) {
    return this.httpClient
      .post<any>('http://localhost:3000/auth/login', data)
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
}
