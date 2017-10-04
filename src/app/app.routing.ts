import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { UserListComponent } from './user/user-list/user-list.component';
import { UserManagementComponent } from './user/user-management/user-management.component';
import { HomeComponent } from './home/home.component';

// Services
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
    //COMMON
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    
    //PUBLIC
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: 'user/:id',
        component: UserManagementComponent
    },
    {
        path: 'newuser',
        component: UserManagementComponent
    },
   

    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

export const AuthProviders = [
    AuthService
];

export const AppGlobalRouting = RouterModule.forRoot(appRoutes);

