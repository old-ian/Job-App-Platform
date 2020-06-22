import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-job-offer',
  templateUrl: './create-job-offer.component.html',
  styleUrls: ['./create-job-offer.component.scss']
})
export class CreateJobOfferComponent implements OnInit {


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
