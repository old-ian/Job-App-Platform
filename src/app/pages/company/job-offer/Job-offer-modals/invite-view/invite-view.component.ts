import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-invite-view',
  templateUrl: './invite-view.component.html',
  styleUrls: ['./invite-view.component.scss']
})
export class InviteViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }
  ngOnInit() {
  }

}
