import { Component, OnInit , ViewChild} from '@angular/core';
// import {MatTableDataSource, MatSort} from '@angular/material';
import { LeaderboardItem } from '../../models/leaderboard-item'
import { LeaderboardService } from '../../services/leaderboard.service'

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  leaders : LeaderboardItem[] = []; 
  displayedColumns = ['username', 'count'];
  lastUpdated : Date;

  constructor(private leaderboardService: LeaderboardService ) { }

  ngOnInit() {
    //stub
    this.leaders = this.getLeaderboard();

    /*
    work when api will bw provided
    this.leaderboardService.getTop10().subscribe(
      data => {
        this.leaders = data;
      }, 
      error => {
        console.log("error occured");
      });
     */

     this.lastUpdated = new Date(Date.now());
  }

  private getLeaderboard() : LeaderboardItem[] {
    let leaders = [      
            {username: 'Mary', count: 10},
            {username: 'john', count: 9},
            {username: 'harry', count: 9},
            {username: 'Erast', count: 9},
            {username: 'Julia', count: 8},
            {username: 'Karry', count: 8},
            {username: 'Alex', count: 7},
            {username: 'Coco', count: 6},
            {username: 'Denis', count: 5},
            {username: 'Max', count: 5}
          ];
    return leaders;
  }
}
