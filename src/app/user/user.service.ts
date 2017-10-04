import { Injectable } from '@angular/core';
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

    constructor(private _http: Http, private _authService: AuthService, private _apiService: ApiService) { }

    getUsers(): Observable<IUser[]> {

        return this._authService.AuthGet(this._apiService.ServerUrl + "/api/users")
            .map((response: Response) => <IUser[]> response.json())
            .do(data => console.log('All returned users: ' +  JSON.stringify(data)))
            .catch(this._apiService.handleError);
    }

    getUser(userId: number): Observable<IUser> {

        return this._authService.AuthGet(this._apiService.ServerUrl + "/api/users/" + userId)
            .map((response: Response) => <IUser>response.json())
            .do(data => console.log('Returned user: ' + JSON.stringify(data)))
            .catch(this._apiService.handleError);
    }

    createNewUser(newUser: IUser){

        return this._authService.AuthPost(this._apiService.ServerUrl + "/api/users/save", newUser)
            .catch(this._apiService.handleError);
    }

    deleteUser(userId: number) {

        return this._authService.AuthDelete(this._apiService.ServerUrl + "/api/users/" + userId)
            .catch(this._apiService.handleError);
    }

}