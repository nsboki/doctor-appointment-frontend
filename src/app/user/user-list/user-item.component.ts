import { IUser } from '../user';
import { UserService } from '../user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html'
})
export class UserItemComponent implements OnInit {

  @Input()  user: IUser;
  @Input() userId: number;
  
  
  constructor(private _userService: UserService,
              private _router: Router) { }

  ngOnInit() {
  }
 

}
