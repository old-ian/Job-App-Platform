import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  @Input() regForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  submitted() {
    this.regForm.get('experience').get('firstname').markAsTouched();
    this.regForm.get('experience').get('firstname').updateValueAndValidity();
    this.regForm.get('experience').get('lastname').markAsTouched();
    this.regForm.get('experience').get('lastname').updateValueAndValidity();
  }
}
