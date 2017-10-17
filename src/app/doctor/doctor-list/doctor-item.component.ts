import { IDoctor } from '../doctor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-item',
  templateUrl: './doctor-item.component.html' 
})
export class DoctorItemComponent implements OnInit {

  @Input() doctor: IDoctor;
  @Input() doctorId: number;
  @Input() itemIndex: number;
  
  constructor() { }

  ngOnInit() {
  }

}
