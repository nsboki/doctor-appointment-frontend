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
export class UserEditComponent {
  
  }
//export class UserEditComponent implements OnInit, OnDestroy {
//
//  private user: IUser;
//  
//  userForm: FormGroup;
//  private userId: number;
//  private isNew = true;
//  private sub: Subscription;
//  private errorMessage: string;
//  
//  constructor(private _router: Router,
//              private _route: ActivatedRoute,
//              private _userService: UserService,
//              private _formBuilder: FormBuilder) { }
//
//  ngOnInit() {
////    this.user = null;
////    this.sub = this._route.params.subscribe(
////      (params: any) => {
////        let id = +params['id'];
////        
////        if(id) {
////          this.isNew = false;
////          this._userService.getUser(this.userId)
////          .subscribe( 
////            user => this.user = user,
////            error => this.errorMessage = <any>error);       
////        } else {
////          this.isNew = true;
////        }
////        this.initForm();
////      }
////    );
//  }
//  
////  onSubmit() {
////    let newUser = this.userForm.value;
////    if(!this.isNew) {
////      newUser.id = this.user.id;
////      newUser.username = this.user.username;
////      newUser.password = this.user.password;
////    }
////    this._userService.createNewUser(newUser);
////    this.navigateBack();
////  }
////  
////  onCancel() {
////    this.navigateBack();
////  }
////
//  ngOnDestroy(): void {
//    this.sub.unsubscribe();
//  }
////  
////  private navigateBack() {
////    this._router.navigate(['../']);
////  }
////  
////  private initForm() {
////    let firstName = '';
////    let lastName = '';
////    let email = '';
////    let role = '';
////    
////    if(!this.isNew) {
////      firstName = this.user.firstName;
////      lastName = this.user.lastName;
////      email = this.user.email;
////      role = this.user.role;
////    }
////    this.userForm = this._formBuilder.group({
////      firstName: [firstName, Validators.required],
////      lastName: [lastName, Validators.required],
////      email: [email, Validators.required],
////      role: [role, Validators.required]
////    });
////    
////  }
//  
//}
