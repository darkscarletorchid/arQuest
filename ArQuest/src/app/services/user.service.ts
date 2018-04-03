import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { User } from '../models/user';
import { UserDto } from '../models/user';
@Injectable()
export class UserService {

  currentUser: UserDto;


  constructor(private http: HttpClient) { }

  private apiPath: string = environment.apiEndpoint + '/user';

  getCurrentUserToken(): UserDto {
    return this.currentUser;
  }
}
