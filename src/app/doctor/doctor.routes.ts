
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { DoctorStartComponent } from './doctor-start.component';
import { Routes } from '@angular/router';

/*
 * 
 * author: Boki 
 */
export const DOCTOR_ROUTES: Routes = [
  {path:'', component: DoctorStartComponent},
  {path:':id', component: DoctorDetailComponent}

];
