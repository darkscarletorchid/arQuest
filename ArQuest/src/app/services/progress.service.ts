import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProgressService {

  constructor(private httpClient: HttpClient) { }

  public getProgressByUser (id: number): Observable<any> {
    return this.httpClient.get('http://' + id);
  }


}
