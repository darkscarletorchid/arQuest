import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CameraArComponent } from './camera-ar/camera-ar.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HeaderComponent } from './camera-ar/header/header.component';
import {ProgressService} from './services/progress.service';
import {HttpClientModule} from '@angular/common/http';
import {ItemService} from './services/item.service';
import {UserService} from './services/user.service';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'quest', component: CameraArComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CameraArComponent,
    LeaderboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    ProgressService,
    ItemService,
    UserService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
