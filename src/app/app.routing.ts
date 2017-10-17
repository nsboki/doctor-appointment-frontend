import { DoctorComponent } from './doctor/doctor.component';
import { DOCTOR_ROUTES } from './doctor/doctor.routes';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { UserListComponent } from './user/user-list/user-list.component';
import { UserManagementComponent } from './user/user-management/user-management.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuard } from './services/auth.guard';

// Services
import { AuthService } from './services/auth.service';
import { UserComponent } from './user/user.component';
import { USER_ROUTES } from './user/user.routes';

const appRoutes: Routes = [
    //COMMON
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    
    //PUBLIC
    { 
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'users',
        component: UserComponent,
        children: USER_ROUTES,
        canActivate: [AuthGuard]
    },
    {
        path: 'patients',
        component: UserComponent
    },
    {
        path: 'doctors',
        component: DoctorComponent,
        children: DOCTOR_ROUTES
    },
    {
        path: 'appointments',
        component: UserComponent,
        children: USER_ROUTES
    },
    {
        path: 'settings',
        component: UserComponent,
        children: USER_ROUTES
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

