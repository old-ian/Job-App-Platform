import { Component, OnInit } from '@angular/core';
import { JobService } from '../../../services/job/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  constructor(private jobservice: JobService) { }

  ngOnInit() {
  }

}
