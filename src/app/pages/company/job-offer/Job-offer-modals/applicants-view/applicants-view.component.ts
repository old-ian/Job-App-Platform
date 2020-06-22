import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-applicants-view',
  templateUrl: './applicants-view.component.html',
  styleUrls: ['./applicants-view.component.scss']
})
export class ApplicantsViewComponent implements OnInit {

 

  
  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit() {
  }

}
