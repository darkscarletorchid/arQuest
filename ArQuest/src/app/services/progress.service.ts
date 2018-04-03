import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserItem} from '../models/item';

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

  public getProgressByUser (id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiEndpoint + '/user/' + id).map(data => {
      // TODO to finish var items =
    });
  }

  public addToProgress(userItem: UserItem): Observable<UserItem> {
    return this.httpClient.post<UserItem>(environment.apiEndpoint + '/markers', userItem, httpOptions);
  }
}
