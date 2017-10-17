import { IUser } from '../user';
import { UserService } from '../user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})

export class UserEditComponent implements OnInit, OnDestroy {

  updateUserForm = new FormGroup({
      id: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      role: new FormControl(),
      regDate: new FormControl()
  });
  
  private selectedUser: IUser;
  private userId: number;
  private sub: Subscription;
  private errorMessage: string;
  guestUserRole=false;
  
  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _userService: UserService,
              private _formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.selectedUser = null;
    this.sub = this._route.params.subscribe(
      (params: any) => {
          this.userId = params['id'];
          this._userService.getUser(this.userId)
            .subscribe(     
              user => {this.selectedUser = user;
                this.initForm();
                if(this.selectedUser.role=="ROLE_GUEST"){
                  this.guestUserRole = true;
                } else {
                  this.guestUserRole = false;
                }
                },
              error => this.errorMessage = <any>error);
      }
    );
  }
  
  onSubmit() {
    const newUser = this.updateUserForm.value;
    this._userService.updateUser(newUser);
    this.navigateBack();
  }
  
  onCancel() {
    this.navigateBack();
  }
  
  onSetDoctor() {
    let newUser = this.updateUserForm.value;
    newUser.role = "ROLE_DOCTOR";
    this._userService.updateUser(newUser);
    this.navigateBack();
  }
  
  onSetPatient() {
    let newUser = this.updateUserForm.value;
    newUser.role = "ROLE_PATIENT";
    this._userService.updateUser(newUser);
    this.navigateBack();
  }
  
  onSetAdmin() {
    let newUser = this.updateUserForm.value;
    newUser.role = "ROLE_ADMIN";
    this._userService.updateUser(newUser);
    this.navigateBack();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
  private navigateBack() {
    this._router.navigate(['/users']);
  }
  
  private initForm() {
    this.updateUserForm = this._formBuilder.group({
      id: [this.selectedUser.id, Validators.required],
      username: [this.selectedUser.username, Validators.required],
      password: [this.selectedUser.password, Validators.required],
      firstName: [this.selectedUser.firstName, Validators.required],
      lastName: [this.selectedUser.lastName, Validators.required],
      email: [this.selectedUser.email, Validators.email],
      role: [this.selectedUser.role, Validators.required],
      regDate: [this.selectedUser.regDate, Validators.required]
    });
    
  }
  
}
