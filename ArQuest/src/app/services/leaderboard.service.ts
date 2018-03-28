import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { LeaderboardItem } from '../models/leaderboard-item'


@Injectable()
export class LeaderboardService {

  constructor(private http: HttpClient, ) { }

  private apiPath: string = environment.apiEndpoint + '/leaderboard';

  getTop10(): Observable<LeaderboardItem[]> {
    return this.http.get<LeaderboardItem[]>(this.apiPath);
  }

}
