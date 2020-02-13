import { Component, OnInit } from '@angular/core';
import { JobService } from '../../../services/job/job.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  user = 'John Ezekiel';
  activeRoute = 'active';
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
  constructor(private jobservice: JobService) { }

  ngOnInit() {
  }

  setActiveRoute() {
    this.activeRoute = this.activeRoute === 'active' ? 'all' : 'active';
  }
}
