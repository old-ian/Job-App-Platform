import { Component, OnInit } from '@angular/core';
import { JobService } from '../../../services/job/job.service';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.scss']
})
export class SavedJobsComponent implements OnInit {
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
  constructor(private jobservice: JobService) { }

  ngOnInit() {
  }

}
