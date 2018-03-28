import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { User } from '../models/user';

@Injectable()
export class UserService {

  currentUser: User;

  constructor(private http: HttpClient) { }

  private apiPath: string = environment.apiEndpoint + '/user';

  getCurrentUser(): User {
    return this.currentUser;
  }
}
