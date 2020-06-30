import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-job-offer',
  templateUrl: './edit-job-offer.component.html',
  styleUrls: ['./edit-job-offer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class EditJobOfferComponent implements OnInit {


  jobOfferForm = new FormGroup({
    position: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    qualification: new FormControl('',Validators.required),
    offer: new FormControl('',Validators.required)
})

get position()
{
   return this.jobOfferForm.get('position');
}
 get description()
{
   return this.jobOfferForm.get('description');
}
 get qualification()
{
   return this.jobOfferForm.get('qualification');
}
 get offer()
{
   return this.jobOfferForm.get('offer');
}


 itemsAsObjects = [{value: 0, display: 'Skillful'}, {value: 1, display: 'Leadership'},{value: 3, display: 'Has creativenes'}];

constructor() { }

ngOnInit() {
}
}
