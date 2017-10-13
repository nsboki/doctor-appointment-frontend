import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';
import { IUser } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  pageTitle: string = 'List of all users';
  errorMessage: string;

  allUsers:IUser[];
  infoMessage:string;
  
  constructor(private _router: Router,
    private _userService: UserService) {
  } 

  ngOnInit() {
    this._userService.getUsers().subscribe(
          users => this.allUsers = users,
          error => this.errorMessage = <any>error);
  }

}
