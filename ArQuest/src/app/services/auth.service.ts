import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiPath: string = environment.apiEndpoint + '/users/authenticate';

  login(email: string, password: string) {
    return this.http.post<any>(this.apiPath, {email: email, password: password})
      .map(data => {
        if (data && data.token) {
          localStorage.setItem('currentUser', JSON.stringify(data));
          localStorage.setItem('isAuth', '1');
        }
        return data;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.setItem('isAuth', '0');
  }

  isAuth() : boolean {
    let isAuth = localStorage.getItem('isAuth');
    return isAuth === '1';
  }
}
