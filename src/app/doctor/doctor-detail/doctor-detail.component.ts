import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDoctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html'
})
export class DoctorDetailComponent implements OnInit, OnDestroy {
 

  errorMessage: any;
  selectedDoctor: IDoctor;
  private doctorIndex: number;
  private pageTitle: string;
  private subscription: Subscription;
  
  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _doctorService: DoctorService) { }

  ngOnInit() {
    this.pageTitle = "Doctor details";
    this.subscription = this._route.params.subscribe(
      (params: any) => {
        this.doctorIndex = params['id'];
        this._doctorService.getDoctor(this.doctorIndex).subscribe(
          doctor => this.selectedDoctor = doctor,
          error => this.errorMessage = <any>error
        );
      }
    )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
