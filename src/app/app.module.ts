import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { ApiService } from './services/api.service';

import { AppGlobalRouting, AuthProviders } from './app.routing';

import { UserService } from './user/user.service';

import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserManagementComponent } from './user/user-management/user-management.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserComponent } from './user/user.component';
import { UserItemComponent } from './user/user-list/user-item.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserStartComponent } from './user/user-start.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserManagementComponent,
    HomeComponent,
    HeaderComponent,
    LoginFormComponent,
    UserComponent,
    UserItemComponent,
    UserEditComponent,
    UserStartComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AppGlobalRouting,
    ReactiveFormsModule
  ],
  providers: [AuthProviders, ApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
