import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item, UserItem} from '../models/item';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  }) };

@Injectable()
export class ProgressService {

  constructor(private httpClient: HttpClient) { }

  public getProgressByUser (id: number): Observable<any> {
    return this.httpClient.get('http://' + id);
  }

  public addToProgress(userItem: UserItem): Observable<any> {
    return this.httpClient.post<UserItem>('http://', userItem, httpOptions);
    // error handling .pipe(
    // catchError(this.handleError('addHero', hero))
  // );
  }
}
