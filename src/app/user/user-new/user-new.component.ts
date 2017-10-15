import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html'
})
export class UserNewComponent implements OnInit {

  newUserForm: FormGroup;
  
  constructor(private _formBuilder: FormBuilder,
              private _userService: UserService,
              private _router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  
  onSubmit() {
    const newUser = this.newUserForm.value;
    this._userService.createNewUser(newUser);
    this.navigateBack();
  }
  
  onCancel() {
    this.navigateBack();
  }
  
  private navigateBack() {
    this._router.navigate(['/users']);
  }

  private initForm(){
    
    this.newUserForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email]
        
    });
  }
}
