import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Injectable()
export class ItemService {
  constructor(private httpClient: HttpClient) { }

  // TODO check if we really need this service
  public getAll (): Observable<any> {
    return this.httpClient.get('http://');
  }
}
