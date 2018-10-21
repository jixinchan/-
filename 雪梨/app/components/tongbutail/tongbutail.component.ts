import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-tongbutail',
  templateUrl: './tongbutail.component.html',
  styleUrls: ['./tongbutail.component.css']
})
export class TongbutailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  course;
  ngOnInit() {
    this.courseId = this.router.snapshot.params['courseId'];
    this.http.get('/api/courses/'+this.courseId).subscribe((data)=>{
      // console.log(data);
      this.course = data;
    });
  }

}
export class Course{
  constructor(
      public id:number,
      public courseName:string,
      public images:string,
      public task:number,
      public person:number
  ){}
}
