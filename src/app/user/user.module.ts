import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule, // App module also imports BrowserModule whereas feature module dont
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule
  ] // AuthService is part of user.module. but it's added here as it can be shared. but this is not true for declarations & imports
})
export class UserModule { }
