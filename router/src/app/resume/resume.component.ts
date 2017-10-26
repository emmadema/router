import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute } from '@angular/router';
import  { JOBS } from './jobs';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

	jobIndex: string = this.route.snapshot.paramMap.get('id');
	job = JOBS.find( job =>{
		return job.id === parseInt(this.jobIndex);
	})

  constructor(
  	private route : ActivatedRoute //makes URL route avalaible to class
  ) { }

  ngOnInit() {

  }

}
