import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { IDoctor } from './doctor';

@Injectable()
export class DoctorService {

  constructor(private _authService: AuthService, private _apiService: ApiService, private _http: Http) { }

  getDoctors() {
    return this._authService.AuthGet(this._apiService.ServerUrl + "/api/doctors")
        .map((response: Response) => <IDoctor[]> response.json())
        .do(data => console.log('All returned doctors: ' + JSON.stringify(data)))
        .catch(this._apiService.handleError);
  }
  
  getDoctor(doctorId: number) {
    return this._authService.AuthGet(this._apiService.ServerUrl + "/api/doctors/" + doctorId)
            .map((response: Response) => <IDoctor>response.json())
            .do(data => console.log('Returned user: ' + JSON.stringify(data)))
            .catch(this._apiService.handleError);
  }
  
}
