import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { User } from '../models/user';
<<<<<<< HEAD
import { UserDto } from '../models/user';
@Injectable()
export class UserService {

  currentUser: UserDto;


=======
import { LeaderboardItem } from '../models/leaderboard-item';

@Injectable()
export class UserService {

>>>>>>> b3fb0bcda1f7aea10bcd954fc426a12b04585872
  constructor(private http: HttpClient) { }

  private apiPath: string = environment.apiEndpoint + '/user';

<<<<<<< HEAD
  getCurrentUserToken(): UserDto {
    return this.currentUser;
=======
  getCurrentUserToken(): string {
    return localStorage.getItem('token');      
  }

  getCurrentUser() : User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  create(user: User) {
    let userData = { firstname: user.firstName, lastName: user.lastName, email: user.email };

    return this.http.post<any>(this.apiPath, userData)
      .map(data => {
        if (data && data.token) {
          localStorage.setItem('token', data);          
          user.id = data.id;
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return data;
      });
>>>>>>> b3fb0bcda1f7aea10bcd954fc426a12b04585872
  }
}
