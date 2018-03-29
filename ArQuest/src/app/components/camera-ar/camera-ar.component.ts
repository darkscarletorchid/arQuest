import {Component, HostListener, OnInit} from '@angular/core';
import {Item, UserItem} from '../../models/item';
import {ProgressService} from '../../services/progress.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-camera-ar',
  templateUrl: './camera-ar.component.html',
  styleUrls: ['./camera-ar.component.css']
})
export class CameraArComponent implements OnInit {

  userToken: string;
  userItem: UserItem;
  itemsFound: Item[];
  actualCount: number;

  constructor(private progressService: ProgressService, private userService: UserService, public snackBar : MatSnackBar) { }

  ngOnInit() {
     this.userToken = this.userService.getCurrentUserToken();
     this.progressService.getProgressByUser(this.userToken);
     this.actualCount = this.itemsFound.length;

  }
  @HostListener('markerFound', ['$event.target'])
  onMarkerFound(target) {
    this.userItem.itemId = target.id;
    this.userItem.userToken = this.userToken;
    this.snackBar.open(target.id + ' found!', '', { duration: 3000, panelClass: 'custom-snackbar' });

    console.log(target.id);
    this.progressService.addToProgress(this.userItem)
       .subscribe(result => this.progressService.getProgressByUser(this.userToken)
         .subscribe(items => {
           this.itemsFound = items;
           this.actualCount = items.length;
           this.snackBar.open('New object found!', '', { duration: 3000, panelClass: 'custom-snackbar' });

    }));
  }
  getProgressByUser(token: string): void {
    this.progressService.getProgressByUser(token)
      .subscribe(items => this.itemsFound = items, error => {});
  }
}
