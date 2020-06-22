import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  user = 'Jigs';

   samples = [
     {
       name : 'Lincoln Brewster',
       image : 'assets/imgs/man.jpg',
       date : '12234',
       hours : '00000'
     },
      {
       name : 'Neziah Boticario',
       image : 'assets/imgs/man2.jpg',
       date : '12234',
       hours : '00000'
     }
     ,
      {
       name : 'Brooke Fraser',
       image : 'assets/imgs/girl.jpg',
       date : '12234',
       hours : '00000'
     },
     {
       name : 'Darlene Schezh',
       image : 'assets/imgs/girl3.jpg',
       date : '12234',
       hours : '00000'
     },
      {
       name : 'Naiomi Boticario',
       image : 'assets/imgs/girl2.jpg',
       date : '12234',
       hours : '00000'
     }
   ]
   companies = [
     {
        name : 'iPhiTech IT '
     },
     {
        name : 'IBM'
     },
     {
        name : 'Accenture'
     },
     {
        name : 'Microsoft'
     },
     {
        name : 'Intel'
     },
      {
        name : 'Google'
     },
           
   ] 

  appliedJobs = [ 
  		{ 

  		company: 'Outlast Developers',
  		position: 'Software Engineer',
  		location: 'Brazil' },
  		{ 
  		company: 'Outlast Developers',
  		position: 'Senior Software Engineer',
  		location: 'Brazil'

  		},
  		
  	]	

  constructor() { }

  ngOnInit() {
  }

}
