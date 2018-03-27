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


  constructor() {
  }

  ngOnInit() {

  }


}
