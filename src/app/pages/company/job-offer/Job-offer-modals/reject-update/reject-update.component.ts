import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-reject-update',
  templateUrl: './reject-update.component.html',
  styleUrls: ['./reject-update.component.scss']
})
export class RejectUpdateComponent implements OnInit {

  

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit() {
  }

}
