import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

// Devolopment settings
const GeneralServerIp: string = "localhost";
export const ServerUrl: string = "https://" + GeneralServerIp + ":8080";
export const AngularServerUrl: string = "http://" + GeneralServerIp + ":4200";

@Injectable()
export class AuthService {

  authHeaders: Headers;

  constructor(private http: Http, private _router: Router) {
  }

  /**
   * Example of how you can make auth request using angulars http methods.
   * @param options if options are not supplied the default content type is application/json
   */
  AuthGet(url: string, options?: RequestOptions): Observable<Response> {

    if (options) {
      options = this._setRequestOptions(options);
    }
    else {
      options = this._setRequestOptions();
    }
    return this.http.get(url, options);
  }
  /**
   * @param options if options are not supplied the default content type is application/json
   */
  AuthPut(url: string, data: any, options?: RequestOptions): Observable<Response> {

    let body = JSON.stringify(data);

    if (options) {
      options = this._setRequestOptions(options);
    }
    else {
      options = this._setRequestOptions();
    }
    return this.http.put(url, body, options);
  }
  /**
   * @param options if options are not supplied the default content type is application/json
   */
  AuthDelete(url: string, options?: RequestOptions): Observable<Response> {

    if (options) {
      options = this._setRequestOptions(options);
    }
    else {
      options = this._setRequestOptions();
    }
    return this.http.delete(url, options);
  }
  /**
   * @param options if options are not supplied the default content type is application/json
   */
  AuthPost(url: string, data: any, options?: RequestOptions): Observable<Response> {

    let body = JSON.stringify(data);

    if (options) {
      options = this._setRequestOptions(options);
    }
    else {
      options = this._setRequestOptions();
    }
    return this.http.post(url, body, options);
  }

  private _setRequestOptions(options?: RequestOptions) {
    
    if (!options) {
      this.authHeaders = new Headers();
      this.authHeaders.set('Content-Type', 'application/json');
      options = new RequestOptions({ headers: this.authHeaders});
    }
    
    return options;
  }
}
