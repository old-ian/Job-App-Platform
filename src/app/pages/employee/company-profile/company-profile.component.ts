import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  companyDetails = [ 
    { website: 'http://www.iPhiTech.com', 
    industry: 'Information Technology & Services', 
    companySize: '51-200 employees',
    type: 'Privately Held',
    location: 'Placeholder location',} ]
    // industry: 'Computer / Information Technology (Software)', 
    // specialization: 'IT/Computer - Software', 
    // role: 'Software Engineer/Programmer', positionlevel: '1-4 Years Experienced Employee' },
  //   { employment: 'Mar 2018 - Aug 2018', 
  //   months: '6 months', 
  //   company: 'Outlast Developers',
  //   position: 'Senior Software Engineer',
  //   location: 'Brazil', 
  //   industry: 'Computer / Information Technology (Software)', 
  //   specialization: 'IT/Computer - Software', 
  //   role: 'Software Engineer/Programmer', positionlevel: '1-4 Years Experienced Employee' }
  // ]
//   educations = [ 
//     { graduated: 'Aug 2019',
//     school: 'Outlast Developers',
//     degree: 'Bachelors Degree in Information Technology',
//     location: 'Philippines'}
//   ]

// skills = [ 
//     { mastery: 'Intermediate',
//     list: ['JavaScript', 'C# Programming Language', 'Angular'] },
//     { mastery: 'Basic',
//     list: ['Java', 'Python'] }
//   ]

//   additionals = [ 
//     { name: 'Expected Salary',
//     info: ['18,000']},
//     {
//       name: 'Preffered Location',
//       info: ['Central Luzon', ' National Capital Reg']
//     },
//     {
//       name: 'Other Information',
//       info: ['Graduate in Bachelor of Science in Information Technology at Tarlac State University']
//     }
//   ]

//   abouts = [ 
//     { name: 'Gender' ,info: 'Male'},
//     { name: 'Address' ,info: 'Tarlac, Central Luzon, Philippines'},
//     { name: 'Nationality' ,info: 'Filipino'}
//   ]  	  	  	
constructor() { 
}

ngOnInit() {
}

}

