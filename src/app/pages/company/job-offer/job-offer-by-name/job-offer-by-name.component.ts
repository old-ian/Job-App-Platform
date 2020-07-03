import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { ApplicantsUpdateComponent } from '../Job-offer-modals/applicants-update/applicants-update.component';
import { ApplicantsViewComponent } from '../Job-offer-modals/applicants-view/applicants-view.component';
import { InterviewsUpdateComponent } from '../Job-offer-modals/interviews-update/interviews-update.component';
import { InterviewsViewComponent } from '../Job-offer-modals/interviews-view/interviews-view.component';
import { InviteUpdateComponent } from '../Job-offer-modals/invite-update/invite-update.component';
import { InviteViewComponent } from '../Job-offer-modals/invite-view/invite-view.component';
import { RejectUpdateComponent } from '../Job-offer-modals/reject-update/reject-update.component';
import { RejectViewComponent } from '../Job-offer-modals/reject-view/reject-view.component';


@Component({
  selector: 'app-job-offer-by-name',
  templateUrl: './job-offer-by-name.component.html',
  styleUrls: ['./job-offer-by-name.component.scss'],

})


export class JobOfferByNameComponent implements OnInit {


  Applicants: PeriodicElement[] = [];
  applicantsToShow: PeriodicElement[] = [];
  starting: number = 0;
  ending: number = 5;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.getApplicants();
    this.applicantsToShow = this.Applicants.slice(this.starting, this.ending);
  }

  getApplicants() {
    this.Applicants = [
      { name: 'Ralph Jordan Butial', date: 'April 25, 2020' },
      { name: 'Rolee Reyes Boticario', date: 'April 01, 2020' },
      { name: 'Paul Justine Arzanmendez', date: 'May 20, 2020' },
      { name: 'Cristian Panuga', date: 'June 01, 2020' },
      { name: 'Michael Ramirez', date: 'June 09, 2020' },
      { name: 'Ralph Jordan Butial', date: 'April 25, 2020' },
      { name: 'Rolee Reyes Boticario', date: 'April 01, 2020' },
      { name: 'Paul Justine Arzanmendez', date: 'May 20, 2020' },
      { name: 'Cristian Panuga', date: 'June 01, 2020' },
    ];
  }
  //=============================== Modal for Reject ===========================================//

  UpdateReject() {
    let dialogRef = this.dialog.open(RejectUpdateComponent,
      {
        data: {
          name: 'Lincoln Brewster', employment: 'Mar 2019 - Aug 2019', months: '6 months',
          company: 'Outlast Developers', location: 'Brazil', position: 'Website Developer',
          specialization: 'IT/Computer - Software', role: 'Software Engineer/Programmer',
          positionlevel: '1-4 Years Experienced Employee', mastery: 'Intermediate',
          industry: 'Computer / Information Technology (Software)', age: '25 yrs old',
          degree: 'Bachelors Degree in Information Technology',
        },
      });

  }

  ViewReject() {
    let dialogRef = this.dialog.open(RejectViewComponent,
      {
        data: {
          name: 'Lincoln Brewster', employment: 'Mar 2019 - Aug 2019', months: '6 months',
          company: 'Outlast Developers', location: 'Brazil', position: 'Website Developer',
          specialization: 'IT/Computer - Software', role: 'Software Engineer/Programmer',
          positionlevel: '1-4 Years Experienced Employee', mastery: 'Intermediate',
          industry: 'Computer / Information Technology (Software)', age: '25 yrs old',
          degree: 'Bachelors Degree in Information Technology',
        },
      });

  }

  //=============================== Modal for Invite ===========================================//

  UpdateInvite() {
    let dialogRef = this.dialog.open(InviteUpdateComponent,
      {
        data: {
          name: 'Lincoln Brewster', employment: 'Mar 2019 - Aug 2019', months: '6 months',
          company: 'Outlast Developers', location: 'Brazil', position: 'Website Developer',
          specialization: 'IT/Computer - Software', role: 'Software Engineer/Programmer',
          positionlevel: '1-4 Years Experienced Employee', mastery: 'Intermediate',
          industry: 'Computer / Information Technology (Software)', age: '25 yrs old',
          degree: 'Bachelors Degree in Information Technology',
        },
      });
  }

  ViewInvite() {
    let dialogRef = this.dialog.open(InviteViewComponent,
      {
        data: {
          name: 'Lincoln Brewster', employment: 'Mar 2019 - Aug 2019', months: '6 months',
          company: 'Outlast Developers', location: 'Brazil', position: 'Website Developer',
          specialization: 'IT/Computer - Software', role: 'Software Engineer/Programmer',
          positionlevel: '1-4 Years Experienced Employee', mastery: 'Intermediate',
          industry: 'Computer / Information Technology (Software)', age: '25 yrs old',
          degree: 'Bachelors Degree in Information Technology',
        },
      });

  }

  //=============================== Modal for Interview ===========================================//

  ViewInterview() {
    let dialogRef = this.dialog.open(InterviewsViewComponent,
      {
        data: {
          name: 'Lincoln Brewster', employment: 'Mar 2019 - Aug 2019', months: '6 months',
          company: 'Outlast Developers', location: 'Brazil', position: 'Website Developer',
          specialization: 'IT/Computer - Software', role: 'Software Engineer/Programmer',
          positionlevel: '1-4 Years Experienced Employee', mastery: 'Intermediate',
          industry: 'Computer / Information Technology (Software)', age: '25 yrs old',
          degree: 'Bachelors Degree in Information Technology',
        },
      });

  }

  UpdateInterview() {
    let dialogRef = this.dialog.open(InterviewsUpdateComponent,
      {
        data: {
          name: 'Lincoln Brewster', employment: 'Mar 2019 - Aug 2019', months: '6 months',
          company: 'Outlast Developers', location: 'Brazil', position: 'Website Developer',
          specialization: 'IT/Computer - Software', role: 'Software Engineer/Programmer',
          positionlevel: '1-4 Years Experienced Employee', mastery: 'Intermediate',
          industry: 'Computer / Information Technology (Software)', age: '25 yrs old',
          degree: 'Bachelors Degree in Information Technology',
        },
      });

  }

  //====================Modal for applicants ===========================================//


  UpdateApplicant() {

    let dialogRef = this.dialog.open(ApplicantsUpdateComponent,
      {
        data: {
          name: 'Lincoln Brewster', employment: 'Mar 2019 - Aug 2019', months: '6 months',
          company: 'Outlast Developers', location: 'Brazil', position: 'Website Developer',
          specialization: 'IT/Computer - Software', role: 'Software Engineer/Programmer',
          positionlevel: '1-4 Years Experienced Employee', mastery: 'Intermediate',
          industry: 'Computer / Information Technology (Software)', age: '25 yrs old',
          degree: 'Bachelors Degree in Information Technology',
        },
      });

    dialogRef.afterClosed().subscribe(result => {
      console.warn('Dialog result :  ${result} ');
    });

  }

  ViewApplicant() {

    let dialogRef = this.dialog.open(ApplicantsViewComponent,
      {
        data: {
          name: 'Lincoln Brewster', employment: 'Mar 2019 - Aug 2019', months: '6 months',
          company: 'Outlast Developers', location: 'Brazil', position: 'Website Developer',
          specialization: 'IT/Computer - Software', role: 'Software Engineer/Programmer',
          positionlevel: '1-4 Years Experienced Employee', mastery: 'Intermediate',
          industry: 'Computer / Information Technology (Software)', age: '25 yrs old',
          degree: 'Bachelors Degree in Information Technology',
        },
      });

    dialogRef.afterClosed().subscribe(result => {
      console.warn('Dialog result :  ${result} ');
    });

  }



  options: string[] = ['Skillfull', 'Leadership', 'Has creativenes'];

  qualifications = [
    { name: 'Skillfull' },
    { name: 'Leadership' },
    { name: 'Has creativenes' }
  ];

  jobOffers = [
    {
      id: 1,
      position: "Back-End Web developer",
      salary: 18000,
      //  qualifications : [ {name:'Skillfull'}, {name:'Leadership'}, {name:'Has creativenes'} ],
      descriptions: "A back-end web developer is responsible for server-side web application logic and integration of the work front-end developers do.",
      date: 'June 04, 2020',
      company: 'iPhiTech IT and Digital Solutions Corporation',
      address: ' 1022 Duplex Quezon Drive Dau, Pampanga, Philippines',
      contact: '09352498604',
      email: 'iPhiTech_sample@gmail.com',
      website: 'www.iPhiTech.com',
      additional_info: 'Provide certificate as Web Developer',
      status: 'open',
      applicants: 2
    }

  ];

  //==================== Table and Pagination for APPLICANTS =============================//


  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // displayedColumns = ['name', 'date', 'actions'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;


  //=============== Table and Pagination for INTERVIEWED ========================================//

  dataSource_int = new MatTableDataSource<PeriodicElement_int>(ELEMENT_DATA_int);

  displayedColumns_int = ['name', 'date', 'actions'];

  @ViewChild(MatPaginator, { static: false }) paginator_int: MatPaginator;


  //=============== Table and Pagination for INVITE

  dataSource_invi = new MatTableDataSource<PeriodicElement_invi>(ELEMENT_DATA_invi);

  displayedColumns_invi = ['name', 'date', 'actions'];

  @ViewChild(MatPaginator, { static: false }) paginator_invi: MatPaginator;

  //====================== Table and Pagination for Rejected ===========================//

  dataSource_rej
    = new MatTableDataSource<PeriodicElement_rej>(ELEMENT_DATA_rej);

  displayedColumns_rej = ['name', 'date', 'actions'];

  @ViewChild(MatPaginator, { static: false }) paginator_rej: MatPaginator;


  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    this.dataSource_int.paginator = this.paginator_int;
    this.dataSource_invi.paginator = this.paginator_invi;
    this.dataSource_rej.paginator = this.paginator_rej;
  }

}

//====================== Table and Pagination for APPLICANT ===========================//

export interface PeriodicElement {
  name: string;
  date: string;
}

//============== Table and Pagination for  INTERVIEWED ===========================//


export interface PeriodicElement_int {
  name: string;
  date: string;
}

const ELEMENT_DATA_int: PeriodicElement_int[] = [
  { name: 'Ralph Jordan Butial', date: 'April 25, 2020' },
  { name: 'Paul Justine Arzanmendez', date: 'May 20, 2020' }

];


//================== Table and Pagination for INVITED =========================//


export interface PeriodicElement_invi {
  name: string;
  date: string;
}

const ELEMENT_DATA_invi: PeriodicElement_invi[] = [
  { name: 'Rolee Reyes Boticario', date: 'April 01, 2020' },
  { name: 'Paul Justine Arzanmendez', date: 'May 20, 2020' },
  { name: 'Cristian Panuga', date: 'June 01, 2020' },


];

//====================== Table and Pagination for Rejecetd ===============================//

export interface PeriodicElement_rej {
  name: string;
  date: string;
}

const ELEMENT_DATA_rej: PeriodicElement_rej[] = [
  { name: 'Ralph Jordan Butial', date: 'April 25, 2020' },
  { name: 'Rolee Reyes Boticario', date: 'April 01, 2020' },
  { name: 'Paul Justine Arzanmendez', date: 'May 20, 2020' },
  { name: 'Cristian Panuga', date: 'June 01, 2020' },
  { name: 'Michael Ramirez', date: 'June 09, 2020' },
  { name: 'Ralph Jordan Butial', date: 'April 25, 2020' },
  { name: 'Rolee Reyes Boticario', date: 'April 01, 2020' },
  { name: 'Paul Justine Arzanmendez', date: 'May 20, 2020' },
  { name: 'Cristian Panuga', date: 'June 01, 2020' },
];

