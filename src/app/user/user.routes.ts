
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserStartComponent } from './user-start.component';
import { Routes } from '@angular/router';


export const USER_ROUTES: Routes = [
  { path:'', component: UserStartComponent},
  { path:'new', component: UserNewComponent },
  { path:':id', component: UserDetailComponent},
  { path:':id/edit', component: UserEditComponent }
]; 
