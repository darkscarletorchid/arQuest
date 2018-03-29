import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { User } from '../models/user';

@Injectable()
export class UserService {

  currentUserToken: string;

  constructor(private http: HttpClient) { }

  private apiPath: string = environment.apiEndpoint + '/user';

  getCurrentUserToken(): string {
    return this.currentUserToken;
  }
}
