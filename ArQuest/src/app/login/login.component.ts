import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authSerivce: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.login();
  }

  private login() {
    this.authSerivce.login(this.email, this.password).subscribe(
      data => {
       // this.snackBar.open("Registration completed");
        this.router.navigate(['/']); //where to navigate?
      },
      error => {
        
      }
    );
  }

}