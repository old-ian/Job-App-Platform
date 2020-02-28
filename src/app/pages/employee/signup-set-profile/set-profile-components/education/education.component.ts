import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Input() regForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  submitted() {
  }
  checkForm() {
    return this.regForm.get('education').valid;
  }
}
