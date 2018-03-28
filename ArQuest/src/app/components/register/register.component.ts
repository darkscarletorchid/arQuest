import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AuthService } from '../../services/auth.service'

import { User } from '../../models/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: User = new User();
  loading: boolean = false;
  //snackBar: MatSnackBar = {};

  constructor(private authService: AuthService, private router: Router, public snackBar : MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {   
    this.register();
  }

  private register() {
    this.loading = true;
    this.authService.register(this.model).subscribe(
      data => {
        this.snackBar.open("Registration completed! The quest will begin soon!", "", { duration: 3000, panelClass: "custom-snackbar" });
        this.router.navigate(["/quest"]);
      }, 
      error => {
        this.snackBar.open(error.error, "OK", { panelClass: "custom-snackbar" });
        this.loading = false;
      });
  }
}

