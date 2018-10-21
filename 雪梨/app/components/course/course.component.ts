import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient) { }
  hcourses;
  ngOnInit() {
    this.http.get('/api/hcourses').subscribe(data=>{
      this.hcourses = data;
    });
  }

}
