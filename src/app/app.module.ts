import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { ApiService } from './services/api.service';

import { AppGlobalRouting, AuthProviders } from './app.routing';

import { UserService } from './user/user.service';

import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserManagementComponent } from './user/user-management/user-management.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserManagementComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AppGlobalRouting
  ],
  providers: [AuthProviders, ApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
