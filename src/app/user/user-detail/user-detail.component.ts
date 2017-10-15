import { IUser } from '../user';
import { UserService } from '../user.service';
import { Component, OnInit, Input, OnDestroy, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit, OnDestroy {
  errorMessage: any;

  selectedUser: IUser;
  private userIndex: number;
  private pageTitle: string;
  private subscription: Subscription;
  
  constructor(private _router: Router, 
              private _route: ActivatedRoute,
              private _userService: UserService) { }

  ngOnInit() {
    this.pageTitle = "User details";
    this.subscription = this._route.params.subscribe(
      (params: any) => {
        this.userIndex = params['id'];
        this._userService.getUser(this.userIndex).subscribe(
            user => this.selectedUser = user,
            error => this.errorMessage = <any>error);
      }
    )
  }
  
  onEdit() {
    this._router.navigate(['/users', this.userIndex, 'edit']);
  }
  
  onDelete() {
    this._userService.deleteUser(this.userIndex);
    this._router.navigate(['/users']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
