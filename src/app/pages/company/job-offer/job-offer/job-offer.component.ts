import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JobOfferComponent implements OnInit {

  constructor(
    private router: Router
  ) { 

  }
  
  currentItemsToShow = [];
  job_Offers = [];
  starting = 0;
  ending = 5;

  ngOnInit() {
    this.loadJobOffers();
    this.currentItemsToShow = this.job_Offers.slice(this.starting, this.ending);
  }

  goToJob(id: number){
    this.router.navigate(['/employer/company-job-offer-by-name', id]);
  }

  updateJobOffer(id: number){
    this.router.navigate(['/employer/company-job-offer-edit']);
  }

  loadJobOffers(){
    this.job_Offers = [
      {
        id: 1,
        position: "Fullstack Developer",
        salary: 18000,
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date: 'June 04, 2020',
        status: false,
        applicants: 2
      },
      {
        id: 2,
        position: "Mobile Developer",
        salary: 18000,
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "A back-end web developer is responsible for server-side web application logic.",
        date: 'June 04, 2020',
        status: true,
        applicants: 2
      }
      ,
      {
        id: 3,
        position: "Software Engineer",
        salary: 18000, //Palgyan sir ng comma search for this po
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date: 'June 04, 2020',
        status: false,
        applicants: 2
      },
      {
        id: 4,
        position: "Laravel developer",
        salary: 18000,
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date: 'June 04, 2020',
        status: true,
        applicants: 2
      },
      {
        id: 5,
        position: "Front-End Web developer",
        salary: 18000,
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date: 'June 04, 2020',
        status: false,
        applicants: 2
      }, {
        id: 3,
        position: "Software Engineer",
        salary: 18000, //Palgyan sir ng comma search for this po
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date: 'June 04, 2020',
        status: false,
        applicants: 2
      },
      {
        id: 4,
        position: "Back-End Web developer",
        salary: 18000,
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date: 'June 04, 2020',
        status: true,
        applicants: 2
      },
      {
        id: 5,
        position: "Front-End Web developer",
        salary: 18000,
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "A back-end web developer is responsible for server-side web application logic and integration of the work front-end developers do.",
        date: 'June 04, 2020',
        status: false,
        applicants: 2
      },
      {
        id: 3,
        position: "Software Engineer",
        salary: 18000, //Palgyan sir ng comma search for this po
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date: 'June 04, 2020',
        status: false,
        applicants: 2
      },
      {
        id: 4,
        position: "Back-End Web developer",
        salary: 18000,
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date: 'June 04, 2020',
        status: true,
        applicants: 2
      },
      {
        id: 5,
        position: "Front-End Web developer",
        salary: 18000,
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date: 'June 04, 2020',
        status: false,
        applicants: 2
      },
      {
        id: 5,
        position: "Back-end Web developer",
        salary: 18000,
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date: 'June 04, 2020',
        status: false,
        applicants: 2
      },
      {
        id: 5,
        position: "Front-end Web developer",
        salary: 18000,
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date: 'June 04, 2020',
        status: false,
        applicants: 2
      },
      {
        id: 3,
        position: "Software Engineer",
        salary: 18000, //Palgyan sir ng comma search for this po
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date: 'June 04, 2020',
        status: false,
        applicants: 2
      },
  
  
    ]
  }
  
}
