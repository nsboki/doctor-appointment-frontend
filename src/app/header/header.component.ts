import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthService ) { }

  ngOnInit() {
    
  }
  
  isAuth() {
    return this._authService.isAuthenticated();
  }

  onLogout() {
    this._authService.logout();
  }

}
