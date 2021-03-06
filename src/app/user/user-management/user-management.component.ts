import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../user.service';
import { IUser } from '../user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html'
})
export class UserManagementComponent implements OnInit {

  pageTitle: string;
  errorMessage: string;

  private sub: Subscription;

  selectedUser:IUser = null;
  editStatus: boolean;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService) {
  } 

  ngOnInit() {
    this.editStatus = false;
    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];

        if (id) {
          this._userService.getUser(id).subscribe(
            user => this.selectedUser = user,
            error => this.errorMessage = <any>error);
          if(this.editStatus) {
            this.pageTitle = "Edit user details";
          } else {
            this.pageTitle = "User details";
          }
        } else {
          this.pageTitle = "Select a user";
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
  
  onEdit() {
    this.editStatus = true;
  }
  
  onSave() {
    this.editStatus = false;
//    this._userService.editUser(this.selectedUser.id, this.selectedUser);
  }
  
  onCancel() {
    this.editStatus = false;
  }
  
  onDelete() {
    this._userService.deleteUser(this.selectedUser.id);
  }

}
