import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
user = 'John Ezekiel';
appliedJobs = [ 
  		{ 
  		company: 'Outlast Developers',
  		position: 'Software Engineer',
  		location: 'Brazil' },
  		{ 
  		company: 'Outlast Developers',
  		position: 'Senior Software Engineer',
  		location: 'Brazil'}
  	]	
jobLists = [ 
  		{ 
  		company: 'Outlast Developers',
  		position: 'Software Engineer',
  		location: 'Brazil',
  		offer: '13,000' ,
  		time: '4 days ago'},
  		{ 
  		company: 'Outlast Developers',
  		position: 'Senior Software Engineer',
  		location: 'Brazil',
  		offer: '13,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Accenture',
  		position: 'Junior Software Engineer',
  		location: 'Metro Manila',
  		offer: '20,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Outlast Developers',
  		position: 'Senior Software Engineer',
  		location: 'Brazil',
  		offer: '13,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Outlast Developers',
  		position: 'Senior Software Engineer',
  		location: 'Brazil',
  		offer: '13,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Outlast Developers',
  		position: 'Senior Software Engineer',
  		location: 'Brazil',
  		offer: '13,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Outlast Developers',
  		position: 'Senior Software Engineer',
  		location: 'Brazil',
  		offer: '13,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Outlast Developers',
  		position: 'Senior Software Engineer',
  		location: 'Brazil',
  		offer: '13,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Outlast Developers',
  		position: 'Senior Software Engineer',
  		location: 'Brazil',
  		offer: '13,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Accenture',
  		position: 'Junior Software Engineer',
  		location: 'Metro Manila',
  		offer: '20,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Accenture',
  		position: 'Junior Software Engineer',
  		location: 'Metro Manila',
  		offer: '20,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Accenture',
  		position: 'Junior Software Engineer',
  		location: 'Metro Manila',
  		offer: '20,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Accenture',
  		position: 'Junior Software Engineer',
  		location: 'Metro Manila',
  		offer: '20,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Accenture',
  		position: 'Junior Software Engineer',
  		location: 'Metro Manila',
  		offer: '20,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Accenture',
  		position: 'Junior Software Engineer',
  		location: 'Metro Manila',
  		offer: '20,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Accenture',
  		position: 'Junior Software Engineer',
  		location: 'Metro Manila',
  		offer: '20,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Accenture',
  		position: 'Junior Software Engineer',
  		location: 'Metro Manila',
  		offer: '20,000',
  		time: '4 days ago'},
  		{ 
  		company: 'Accenture',
  		position: 'Junior Software Engineer',
  		location: 'Metro Manila',
  		offer: '20,000',
  		time: '4 days ago'},
  	]	  	  	
  constructor() { 
  }

  ngOnInit() {
  }

}
