import {Component, HostListener, OnInit} from '@angular/core';
import {Item, UserItem} from '../../models/item';
import {ProgressService} from '../../services/progress.service';
import {UserService} from '../../services/user.service';
import {User, UserDto} from '../../models/user';
import {MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-camera-ar',
  templateUrl: './camera-ar.component.html',
  styleUrls: ['./camera-ar.component.css']
})
export class CameraArComponent implements OnInit {

  user: User;
  userItem: UserItem;
  itemsFound: Item[];
  actualCount: number;

  constructor(private progressService: ProgressService, private userService: UserService, public snackBar : MatSnackBar) { }

  ngOnInit() {
     this.user = this.userService.getCurrentUser();
     this.progressService.getProgressByUser(this.user.id);
     this.actualCount = this.itemsFound.length;

  }
  @HostListener('markerFound', ['$event.target'])
  onMarkerFound(target) {
    this.userItem.itemId = target.id;
    this.userItem.userToken = this.userService.getCurrentUserToken();
    this.snackBar.open(target.id + ' found!', '', { duration: 3000, panelClass: 'custom-snackbar' });

    console.log(target.id);
    this.progressService.addToProgress(this.userItem)
       .subscribe(result => this.progressService.getProgressByUser(this.user.id)
         .subscribe(items => {
           this.itemsFound = items;
           //this.actualCount = items.length;
           this.actualCount = 0;
           this.snackBar.open('New object found!', '', { duration: 3000, panelClass: 'custom-snackbar' });

    }));
  }
  getProgressByUser(id: number): void {
    this.progressService.getProgressByUser(id)
      .subscribe(items => this.itemsFound = items, error => {});
  }
}
