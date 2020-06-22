import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-reject-view',
  templateUrl: './reject-view.component.html',
  styleUrls: ['./reject-view.component.scss']
})
export class RejectViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit() {
  }

}
