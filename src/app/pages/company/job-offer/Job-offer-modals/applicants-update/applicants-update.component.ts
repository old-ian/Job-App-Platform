import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'app-applicants-update',
  templateUrl: './applicants-update.component.html',
  styleUrls: ['./applicants-update.component.scss']
})
export class ApplicantsUpdateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit() {
  }

}
