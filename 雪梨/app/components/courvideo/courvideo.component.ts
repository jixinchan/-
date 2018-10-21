import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courvideo',
  templateUrl: './courvideo.component.html',
  styleUrls: ['./courvideo.component.css']
})
export class CourvideoComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  hcourseId;
  hcourse;
  ngOnInit() {
    this.hcourseId = this.router.snapshot.params['hcourseId'];
    this.http.get('/api/hcourse/'+this.hcourseId).subscribe(data=>{
      this.hcourse = data;
    });
  }

}
