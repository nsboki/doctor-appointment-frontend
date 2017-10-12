import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../user.service';
import { IUser } from '../user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  pageTitle: string;
  errorMessage: string;

  private sub: Subscription;

  selectedUser:IUser;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService) {
  } 

  ngOnInit() {

    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];

        if (id) {
          this.pageTitle = "User details";
          this._userService.getUser(id).subscribe(
            user => this.selectedUser = user,
            error => this.errorMessage = <any>error);
        } else {
          this.pageTitle = "Create new user";
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
    this._router.navigate(['/users', this.selectedUser.id, 'edit']);
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
