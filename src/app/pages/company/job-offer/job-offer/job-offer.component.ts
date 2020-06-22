import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent implements OnInit {

  constructor() { }


 // p: number = 1;

 currentItemsToShow= [];
ngOnInit() {
  this.currentItemsToShow = this.job_Offers;
}


  onPageChange($event) {
    this.currentItemsToShow =  this.job_Offers.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  }

  job_Offers =  [
    {
      id: 1, 
      position: "Fullstack Developer",
      salary: 18000, 
      qualifications: ["Skillful", "Leadership", "Has creativeness"],
      descriptions: "Lorem Ipsum",
      date : 'June 04, 2020',
      status : false ,
      applicants: 2
    },
    {
      id: 2,
      position: "Mobile Developer",
      salary: 18000, 
      qualifications: ["Skillful", "Leadership", "Has creativeness"],
      descriptions: "Lorem Ipsum",
      date : 'June 04, 2020',
      status : true ,
      applicants: 2
    }
    ,
    {
      id: 3,
      position: "Software Engineer",
      salary: 18000, //Palgyan sir ng comma search for this po
      qualifications: ["Skillful", "Leadership", "Has creativeness"],
      descriptions: "Lorem Ipsum",
      date : 'June 04, 2020',
      status : false ,
      applicants: 2
    },
    {
      id: 4, 
      position: "Laravel developer",
      salary: 18000, 
      qualifications: ["Skillful", "Leadership", "Has creativeness"],
      descriptions: "Lorem Ipsum",
      date : 'June 04, 2020',
      status : true,
      applicants: 2
      },
      {
        id: 5, 
        position: "Front-End Web developer",
        salary: 18000, 
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date : 'June 04, 2020',
        status : false ,
        applicants: 2
      }, {
        id: 3,
        position: "Software Engineer",
        salary: 18000, //Palgyan sir ng comma search for this po
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date : 'June 04, 2020',
        status : false ,
        applicants: 2
      },
      {
        id: 4, 
        position: "Back-End Web developer",
        salary: 18000, 
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date : 'June 04, 2020',
        status : true,
        applicants: 2
        },
        {
          id: 5, 
          position: "Front-End Web developer",
          salary: 18000, 
          qualifications: ["Skillful", "Leadership", "Has creativeness"],
          descriptions: "Lorem Ipsum",
          date : 'June 04, 2020',
          status : false ,
          applicants: 2
        },
        {
          id: 3,
          position: "Software Engineer",
          salary: 18000, //Palgyan sir ng comma search for this po
          qualifications: ["Skillful", "Leadership", "Has creativeness"],
          descriptions: "Lorem Ipsum",
          date : 'June 04, 2020',
          status : false ,
          applicants: 2
        },
        {
          id: 4, 
          position: "Back-End Web developer",
          salary: 18000, 
          qualifications: ["Skillful", "Leadership", "Has creativeness"],
          descriptions: "Lorem Ipsum",
          date : 'June 04, 2020',
          status : true,
          applicants: 2
          },
          {
            id: 5, 
            position: "Front-End Web developer",
            salary: 18000, 
            qualifications: ["Skillful", "Leadership", "Has creativeness"],
            descriptions: "Lorem Ipsum",
            date : 'June 04, 2020',
            status : false ,
            applicants: 2
          },
          {
            id: 5, 
            position: "Back-end Web developer",
            salary: 18000, 
            qualifications: ["Skillful", "Leadership", "Has creativeness"],
            descriptions: "Lorem Ipsum",
            date : 'June 04, 2020',
            status : false ,
            applicants: 2
          },
          {
            id: 5, 
            position: "Front-end Web developer",
            salary: 18000, 
            qualifications: ["Skillful", "Leadership", "Has creativeness"],
            descriptions: "Lorem Ipsum",
            date : 'June 04, 2020',
            status : false ,
            applicants: 2
          },
          {
            id: 3,
            position: "Software Engineer",
            salary: 18000, //Palgyan sir ng comma search for this po
            qualifications: ["Skillful", "Leadership", "Has creativeness"],
            descriptions: "Lorem Ipsum",
            date : 'June 04, 2020',
            status : false ,
            applicants: 2
          },
 

  ]

  
   jobOffers =  [

     {
      id: 1, 
      position: "Back-End Web developer",
      salary: 18000, 
      qualifications: ["Skillful", "Leadership", "Has creativeness"],
      descriptions: "Lorem Ipsum",
      date : 'June 04, 2020',
      status : true,
      applicants: 2
      },
      {
        id: 2, 
        position: "Front-End Web developer",
        salary: 18000, 
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date : 'June 04, 2020',
        status : false ,
        applicants: 2
      },
      {
        id: 3,
        position: "Software Engineer",
        salary: 18000, 
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date : 'June 04, 2020',
        status : true ,
        applicants: 2
      }
      ,
      {
        id: 4,
        position: "Database Manager",
        salary: 18000, //Palgyan sir ng comma search for this po
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date : 'June 04, 2020',
        status : false ,
        applicants: 2
      },
      {
        id: 5, 
        position: "React.js developer",
        salary: 18000, 
        qualifications: ["Skillful", "Leadership", "Has creativeness"],
        descriptions: "Lorem Ipsum",
        date : 'June 04, 2020',
        status : true,
        applicants: 2
        },
        {
          id: 6, 
          position: "Angular developer",
          salary: 18000, 
          qualifications: ["Skillful", "Leadership", "Has creativeness"],
          descriptions: "Lorem Ipsum",
          date : 'June 04, 2020',
          status : false ,
          applicants: 2
        },
        {
          id: 7,
          position: "Vue.js Engineer",
          salary: 18000, 
          qualifications: ["Skillful", "Leadership", "Has creativeness"],
          descriptions: "Lorem Ipsum",
          date : 'June 04, 2020',
          status : true ,
          applicants: 2
        }
        ,
        {
          id: 8,
          position: "Computer Engineer",
          salary: 18000, //Palgyan sir ng comma search for this po
          qualifications: ["Skillful", "Leadership", "Has creativeness"],
          descriptions: "Lorem Ipsum",
          date : 'June 04, 2020',
          status : false ,
          applicants: 2
        },
        {
          id: 3,
          position: "Software Engineer",
          salary: 18000, //Palgyan sir ng comma search for this po
          qualifications: ["Skillful", "Leadership", "Has creativeness"],
          descriptions: "Lorem Ipsum",
          date : 'June 04, 2020',
          status : false ,
          applicants: 2
        },
        {
          id: 4, 
          position: "Back-End Web developer",
          salary: 18000, 
          qualifications: ["Skillful", "Leadership", "Has creativeness"],
          descriptions: "Lorem Ipsum",
          date : 'June 04, 2020',
          status : true,
          applicants: 2
          },
          {
            id: 5, 
            position: "Front-End Web developer",
            salary: 18000, 
            qualifications: ["Skillful", "Leadership", "Has creativeness"],
            descriptions: "Lorem Ipsum",
            date : 'June 04, 2020',
            status : false ,
            applicants: 2
          },
          {
            id: 5, 
            position: "Front-End Web developer",
            salary: 18000, 
            qualifications: ["Skillful", "Leadership", "Has creativeness"],
            descriptions: "Lorem Ipsum",
            date : 'June 04, 2020',
            status : false ,
            applicants: 2
          }         

    ]


}
