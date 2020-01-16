import { Component, OnInit } from '@angular/core';
import { JobService } from '../../../services/job/job.service';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.scss']
})
export class SavedJobsComponent implements OnInit {

  constructor(private jobservice: JobService) { }

  ngOnInit() {
  }

}
