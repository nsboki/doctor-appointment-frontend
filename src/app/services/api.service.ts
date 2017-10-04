import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthService, ServerUrl } from '../services/auth.service';

@Injectable()
export class ApiService {
  ServerUrl: string;

  constructor(private _authService: AuthService) { 
      this.ServerUrl = ServerUrl;
  }

  public handleError(err: Response) {

        var errorJson = JSON.stringify(err);
        console.error(errorJson);
        
        var errorMessage = 'Server error';
        // Try to get more descriptive error
        if (err.text() && typeof err.json == 'function') {
            if (err.json() && err.json().message) {
                errorMessage = err.json().message;
            }
        }
        
        return Observable.throw(errorMessage);
  }
}
