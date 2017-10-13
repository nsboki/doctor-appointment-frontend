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
    this._router.navigate(['/users', this.selectedUser.id, 'edit']);
  }
  
  onSave() {
    this.editStatus = false;
    this._userService.editUser(this.selectedUser);
  }
  
  onCancel() {
    this.editStatus = false;
  }
  
  onDelete() {
    this._userService.deleteUser(this.selectedUser.id);
    this._router.navigate(['/users']);
  }

}

//
//------------
//  
//import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Router, ActivatedRoute } from "@angular/router";
//import { Subscription } from "rxjs/Subscription";
//
//import { Recipe } from "../recipe";
//import { ShoppingListService } from "app/shopping-list/shopping-list.service";
//import { RecipeService } from "app/recipes/recipe.service";
//
//@Component({
//  selector: 'rb-recipe-detail',
//  templateUrl: './recipe-detail.component.html'
//})
//export class RecipeDetailComponent implements OnInit, OnDestroy {
//
//  selectedRecipe: Recipe;
//  private recipeIndex: number;
//  private subscription: Subscription;
//
//  constructor(private sls: ShoppingListService, private router: Router, 
//              private route: ActivatedRoute, private recipeService: RecipeService) { }
//
//  ngOnInit() {
//    this.subscription = this.route.params.subscribe(
//      (params: any) => {
//        this.recipeIndex = params['id'];
//        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
//      }
//    );
//  }
//
//  onEdit() {
//    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
//  }
//
//  onDelete() {
//    this.recipeService.deleteRecipe(this.selectedRecipe);
//    this.router.navigate(['/recipes']);
//  }
//
//  onAddToShoppingList() {
//    this.sls.addItems(this.selectedRecipe.ingredients);
//  }
//
//  ngOnDestroy() {
//    this.subscription.unsubscribe(); //prevent memory leak
//  }
//
//}
//  
//
