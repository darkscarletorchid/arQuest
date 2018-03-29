import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item, UserItem} from '../models/item';
import { catchError, map, tap } from 'rxjs/operators';

import 'rxjs/add/operator/catch';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }) };
@Injectable()
export class ProgressService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
  }

  public getProgressByUser (token: string): Observable<UserItem[]> {
    return this.httpClient.get<UserItem[]>(environment.apiEndpoint + '/markerUser' + token);
  }

  public addToProgress(userItem: UserItem): Observable<UserItem> {
    return this.httpClient.post<UserItem>(environment.apiEndpoint + '/markers', userItem, httpOptions);
  }
}
