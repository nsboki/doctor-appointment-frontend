import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';

import { IUser } from './user';

@Injectable()
export class UserService {

    userChanged = new EventEmitter<IUser[]>();
    errorMessage: string;
    allUsers:IUser[];
  
    constructor(private _http: Http, private _authService: AuthService, private _apiService: ApiService) { }

    getUsers() {

        return this._authService.AuthGet(this._apiService.ServerUrl + "/api/users")
            .map((response: Response) => <IUser[]> response.json())
            .do(data => console.log('All returned users: ' +  JSON.stringify(data)))
            .catch(this._apiService.handleError);
    }

    getUser(userId: number){

        return this._authService.AuthGet(this._apiService.ServerUrl + "/api/users/" + userId)
            .map((response: Response) => <IUser>response.json())
            .do(data => console.log('Returned user: ' + JSON.stringify(data)))
            .catch(this._apiService.handleError);
    }

    createNewUser(newUser: IUser){
      this._http.post(this._apiService.ServerUrl + "/api/users/save", newUser).subscribe((data) => {this.emitUserChanges()});
    }
  
    updateUser(newUser: IUser ) {
      this._http.post(this._apiService.ServerUrl + "/api/users/save", newUser)
        .subscribe((data) => this.emitUserChanges())
//        return this._authService.AuthPost(this._apiService.ServerUrl + "/api/users"+ userId + "save", newUser)
//            .catch(this._apiService.handleError);
      
    }

    deleteUser(userId: number) {
      this._http.delete(this._apiService.ServerUrl + "/api/users/" + userId)
                    .subscribe(
                    (data: any) => {this.emitUserChanges()});
//        this._authService.AuthDelete(this._apiService.ServerUrl + "/api/users/" + userId)
//            .map((response: Response) => this.userChanged.emit(<IUser[]> response.json()))
//            .do(data => console.log('All returned users: ' +  JSON.stringify(data)))
//          .catch(this._apiService.handleError);
//      this.getUsers().subscribe(
//          users => 
//          this.userChanged.emit(users),
//          error => this.errorMessage = <any>error);
    }
//    private _setRequestOptions(options?: RequestOptions) {
//      
//    if (!options) {
//      this.authHeaders = new Headers();
//      this.authHeaders.set('Content-Type', 'application/json');
//      options = new RequestOptions({ headers: this.authHeaders});
//    }
//    
//    return options;
//
//}
  emitUserChanges() {
    this.getUsers().subscribe(
        users => 
        this.userChanged.emit(users)
      )
  }
}
