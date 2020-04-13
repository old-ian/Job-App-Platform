import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  @Input() regForm: FormGroup;
  constructor() { } 

  ngOnInit() {
  }
  checkForm() {
  }
  submit() {
    console.log(this.regForm);
  }
}
