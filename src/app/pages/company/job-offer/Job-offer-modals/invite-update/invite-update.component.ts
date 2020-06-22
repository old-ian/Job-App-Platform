import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-invite-update',
  templateUrl: './invite-update.component.html',
  styleUrls: ['./invite-update.component.scss']
})
export class InviteUpdateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit() {
  }

}
