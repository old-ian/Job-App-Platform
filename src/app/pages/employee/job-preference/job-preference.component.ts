import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-preference',
  templateUrl: './job-preference.component.html',
  styleUrls: ['./job-preference.component.scss']
})
export class JobPreferenceComponent implements OnInit {

  experiences = [ 
    { employment: 'Mar 2019 - Aug 2019', 
    months: '6 months', 
    company: 'Outlast Developers',
    position: 'Software Engineer',
    location: 'Brazil', 
    industry: 'Computer / Information Technology (Software)', 
    specialization: 'IT/Computer - Software', 
    role: 'Software Engineer/Programmer', positionlevel: '1-4 Years Experienced Employee' },
    { employment: 'Mar 2018 - Aug 2018', 
    months: '6 months', 
    company: 'Outlast Developers',
    position: 'Senior Software Engineer',
    location: 'Brazil', 
    industry: 'Computer / Information Technology (Software)', 
    specialization: 'IT/Computer - Software', 
    role: 'Software Engineer/Programmer', positionlevel: '1-4 Years Experienced Employee' }
  ]
  educations = [ 
    { graduated: 'Aug 2019',
    school: 'Outlast Developers',
    degree: 'Bachelors Degree in Information Technology',
    location: 'Philippines'}
  ]

skills = [ 
    { mastery: 'Intermediate',
    list: ['JavaScript', 'C# Programming Language', 'Angular'] },
    { mastery: 'Basic',
    list: ['Java', 'Python'] }
  ]

  additionals = [ 
    { name: 'Expected Salary',
    info: ['18,000']},
    {
      name: 'Preffered Location',
      info: ['Central Luzon', ' National Capital Reg']
    },
    {
      name: 'Other Information',
      info: ['Graduate in Bachelor of Science in Information Technology at Tarlac State University']
    }
  ]

  abouts = [ 
    { name: 'Gender' ,info: 'Male'},
    { name: 'Address' ,info: 'Tarlac, Central Luzon, Philippines'},
    { name: 'Nationality' ,info: 'Filipino'}
  ]  	  	  	
constructor() { 
}

ngOnInit() {
}

}
