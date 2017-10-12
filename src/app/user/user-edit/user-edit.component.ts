import { IUser } from '../user';
import { UserService } from '../user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {

  userForm: FormGroup;
  private userId: number;
  private selectedUser: IUser;
  private isNew = true;
  private sub: Subscription;
  private errorMessage: string;
  
  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _userService: UserService,
              private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')){
          this.isNew = false;
          this.userId = +params['id'];
          this._userService.getUser(this.userId).subscribe(
            user => this.selectedUser = user,
            error => this.errorMessage = <any>error);       
        } else {
          this.isNew = true;
          this.selectedUser = null;
        }
        this.initForm();
      }
    );
  }
  
  onSubmit() {
    let newUser = this.userForm.value;
    if(this.isNew) {
      this._userService.createNewUser(newUser);
    } else {
      newUser.id = this.selectedUser.id;
      newUser.username = this.selectedUser.username;
      newUser.password = this.selectedUser.password;
      this._userService.editUser(this.selectedUser, newUser);
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
    let firstName = '';
    let lastName = '';
    let email = '';
    let role = '';
    
    if(!this.isNew) {
      firstName = this.selectedUser.firstName;
      lastName = this.selectedUser.lastName;
      email = this.selectedUser.email;
      role = this.selectedUser.role;
    }
    this.userForm = this._formBuilder.group({
      firstName: [firstName, Validators.required],
      lastName: [lastName, Validators.required],
      email: [email, Validators.required],
      role: [role, Validators.required]
    });
    
  }
  
}
