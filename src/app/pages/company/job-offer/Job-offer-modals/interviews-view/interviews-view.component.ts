import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-interviews-view',
  templateUrl: './interviews-view.component.html',
  styleUrls: ['./interviews-view.component.scss']
})
export class InterviewsViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit() {
  }

}
