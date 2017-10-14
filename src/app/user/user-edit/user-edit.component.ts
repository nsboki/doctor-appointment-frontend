import { IUser } from '../user';
import { UserService } from '../user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})

export class UserEditComponent implements OnInit, OnDestroy {

  private user: IUser = null;
  
  userForm: FormGroup;
  private userId: number;
  private isNew = true;
  private sub: Subscription;
  private errorMessage: string;
  
  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _userService: UserService,
              private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = null;
    this.sub = this._route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.userId = +params['id'];
          this._userService.getUser(this.userId)
            .subscribe(     
              user => this.user = user,
              error => this.errorMessage = <any>error);
        } else {
          this.isNew = true;
          this.user = null;
        }
        this.initForm();
      }
    );
  }
  
  onSubmit() {
    const newUser = this.userForm.value;
    if(this.isNew) {
      this._userService.createNewUser(newUser);
    } else {
      this._userService.editUser(newUser);
    }
    this.navigateBack();
  }
  
  onCancel() {
    this.navigateBack();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
  private navigateBack() {
    this._router.navigate(['../']);
  }
  
  private initForm() {
    let id:number;
    let username = '';
    let password = '';
    let firstName = '';
    let lastName = '';
    let email = '';
    let role = '';
    let regDate;
    
    if(!this.isNew) {
      username = this.user.username;
      id = this.user.id;
      password = this.user.password;
      firstName = this.user.firstName;
      lastName = this.user.lastName;
      email = this.user.email;
      role = this.user.role;
      regDate = this.user.regDate;
    }
    this.userForm = this._formBuilder.group({
      username: [username, Validators.required],
      password: [password, Validators.required],
      firstName: [firstName, Validators.required],
      lastName: [lastName, Validators.required],
      email: [email, Validators.required],
//      role: [role, Validators.required]
    });
    
  }
  
}
