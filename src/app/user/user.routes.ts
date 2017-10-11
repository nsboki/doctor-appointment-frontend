
import { UserManagementComponent } from './user-management/user-management.component';
import { Routes } from '@angular/router';

import { UserStartComponent } from './user-start.component';

export const USER_ROUTES: Routes = [
  { path:'', component: UserStartComponent },
  { path:'new', component: UserManagementComponent },
  { path:':id', component: UserManagementComponent },
  { path:':id/edit', component: UserManagementComponent }
]; 
