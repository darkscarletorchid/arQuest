import {Component, HostListener, OnInit} from '@angular/core';
import {ProgressService} from '../../services/progress.service';
import {Item, UserItem} from '../../models/item';
import {ItemService} from '../../services/item.service';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean;
  itemsFound: Item[];
  actualCount: number;
  totalCount: number;
  user: User;
  userItem: UserItem;
  constructor( private progressService: ProgressService,
               private itemService: ItemService,
               private userService: UserService) {
    // TODO remove stub
    this.user = {
      id: 1,
      username: 'Nastia'
    };
    this.totalCount = 10;
    this.actualCount = 0;
    this.isAuthenticated = true;
  }

  ngOnInit() {
    // this.user = this.userService.getCurrentUser();
    // this.getProgressByUser(this.user.id);
    // this.actualCount = this.itemsFound.length;
    // this.itemService.getAll().subscribe(items => this.totalCount = items.length, error => {});
  }

  getProgressByUser(id: number): void {
    this.progressService.getProgressByUser(id)
      .subscribe(items => this.itemsFound = items, error => {});
  }

  @HostListener('markerFound', ['$event'])
  onMarkerFound(e) {
    this.userItem.itemId = e.detail.markerId;
    this.userItem.userId = this.user.id;
    this.progressService.addToProgress(this.userItem)
      .subscribe(result => this.progressService.getProgressByUser(this.user.id)
        .subscribe(items => {
          this.itemsFound = items;
          this.actualCount = items.length;
        }));
  }
}