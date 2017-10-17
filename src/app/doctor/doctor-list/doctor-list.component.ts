import { IDoctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html'
})
export class DoctorListComponent implements OnInit {

  pageTitle: string = 'List of all doctors';
  errorMessage: string;
  
  allDoctors: IDoctor[];
  infoMessage: string;
  
  constructor(private _doctorService: DoctorService) { }

  ngOnInit() {
    this._doctorService.getDoctors().subscribe(
        doctors => this.allDoctors = doctors,
        error => this.errorMessage = <any> error);
  }

}
