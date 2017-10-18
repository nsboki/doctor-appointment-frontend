import { LoginUser } from '../models/login-user';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

//  user: LoginUser;
  loginUserForm: FormGroup;
  
  constructor(private _auth: AuthService,
              private _formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.initForm();
//    this.user = new LoginUser('','');
  }
  
  onLogin(): void {
    const loginUser = this.loginUserForm.value;
  this._auth.login(loginUser);
//  .then((user) => {
//    localStorage.setItem('token', user.json().auth_token);
//  })
//  .catch((err) => {
//    console.log(err);
//  });
  }

  private initForm() {
    this.loginUserForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
}
