import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
	jobs = [ 
		{ name: 'Sales'},
		{ name: 'Engineering'},
		{ name: 'Business Development'},
		{ name: 'Marketing'},
		{ name: 'Information Technology'},
		{ name: 'Healthcare Services'},
		{ name: 'Human Resources'}
	]
  constructor() { }

  ngOnInit() {
  }

}
