
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-interviews-update',
  templateUrl: './interviews-update.component.html',
  styleUrls: ['./interviews-update.component.scss']
})
export class InterviewsUpdateComponent implements OnInit {


constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit() {
  }

}
