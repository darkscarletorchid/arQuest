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

    this.leaderboardService.getTopUser().subscribe(
      data => {
        this.leaders = data;
      }, 
      error => {
        console.log("error occured");
      });

     this.lastUpdated = new Date(Date.now());
  }

  private getLeaderboard() : LeaderboardItem[] {
    return new Array<LeaderboardItem>();
  }
    
}
