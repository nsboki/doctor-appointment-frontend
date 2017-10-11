import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../user.service';
import { IUser } from '../user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  pageTitle: string;
  errorMessage: string;

  private sub: Subscription;

  user:IUser;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService) {
  } 

  ngOnInit() {

    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];

        if (id) {
          this.pageTitle = "User details";
          this._userService.getUser(id).subscribe(
            user => this.user = user,
            error => this.errorMessage = <any>error);
        } else {
          this.pageTitle = "Create new user";
//          this.user = {
//            id: null,
//            role: "",
//            username: "",
//            password: "",
//            regDate: null
//          };
        }

      });
  }

}
