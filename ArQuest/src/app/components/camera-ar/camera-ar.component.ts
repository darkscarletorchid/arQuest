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

  user: User;
  userItem: UserItem;
  itemsFound: Item[];
  actualCount: number;
  totalCount: number;



  constructor(private progressService: ProgressService, private userService: UserService, public snackBar : MatSnackBar) { }

  ngOnInit() {
    // TODO remove stub
    this.user = new User({
      id: 1,
      username: 'Nastia'
    });
    this.totalCount = 10;
    this.actualCount = 0;
    this.userItem = new UserItem();
    // this.user = this.userService.getCurrentUser();
    // this.getProgressByUser(this.user.id);
    // this.actualCount = this.itemsFound.length;
    // this.itemService.getAll().subscribe(items => this.totalCount = items.length, error => {});
  }
  @HostListener('markerFound', ['$event.target'])
  onMarkerFound(target) {
    this.userItem.itemId = target.id;
    this.userItem.userId = this.user.id;
    this.snackBar.open(target.id + ' found!', '', { duration: 3000, panelClass: 'custom-snackbar' });

    console.log(target.id);
    // this.progressService.addToProgress(this.userItem)
    //   .subscribe(result => this.progressService.getProgressByUser(this.user.id)
    //     .subscribe(items => {
    //       this.itemsFound = items;
    //       this.actualCount = items.length;
    // this.snackBar.open('New object found!', '', { duration: 3000, panelClass: 'custom-snackbar' });

    //     }));
  }
  getProgressByUser(id: number): void {
    this.progressService.getProgressByUser(id)
      .subscribe(items => this.itemsFound = items, error => {});
  }
}
