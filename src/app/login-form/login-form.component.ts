import { AuthService } from '../services/auth.service';
import { UserService } from '../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private _router:Router, private _user: UserService, private _authService: AuthService) { }

  ngOnInit() {
  }
  
  loginUser(event) {
    var username = event.target.element[0].value;
    var password = event.target.element[0].value;
    console.log(username,password);
    this._user.loginUser({"username": username, "password": password});
    if(this._user.getLoggedInUser) {
//      this._authService.login();
    } else {
      this._authService.logout();
    }
    console.log(this._authService.isAuthenticated());
//      this._router.navigate(['home']);
//    if(username == 'admin' && password == 'admin') {
////      this._user.setUserLoggedIn();
//    } 
  }

}
