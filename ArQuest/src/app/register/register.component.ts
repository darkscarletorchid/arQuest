import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { UserService } from '../services/user.service'

import { User } from '../models/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: User = new User();
  //snackBar: MatSnackBar = {};

  constructor(private userService: UserService, private router: Router, public snackBar : MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
    this.snackBar.open("Registration completed", "", {duration: 3000});
    //this.register();
  }

  private register() {
    this.userService.create(this.model).subscribe(
      data => {
        this.snackBar.open("Registration completed");
        this.router.navigate(['/login']);
      }, 
      error => {
        this.snackBar.open("Registration failed: " + error);
      });
  }
  /*
  
import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
  */
}
