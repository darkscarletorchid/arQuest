import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiPath: string = environment.apiEndpoint + '/users/authenticate';

  register(user: User) {
    return this.http.post<any>(this.apiPath, {username: user.username, email: user.email})
      .map(data => {
        if (data && data.token) {
          localStorage.setItem('token', data);
          localStorage.setItem('username', user.username);
          localStorage.setItem('email', user.email);
        }
        return data;
      });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
  }

  isAuth() : boolean {
    //if token exists in local storage
    return Boolean(localStorage.getItem('token'));
  }
}
