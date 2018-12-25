import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.routes';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule, // App module also imports BrowserModule whereas feature module dont
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
