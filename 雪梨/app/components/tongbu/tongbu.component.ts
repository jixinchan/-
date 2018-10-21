import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private http:HttpClient, private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  courses;
  go(){
    // this.route.navigate(['/shequ',300]);
  }
  ngOnInit() {
    // this.courseId = this.router.snapshot.params['courseId'];
    // this.router.params.subscribe((params)=>{
    //   this.courseId = params['courseId'];
    // })

    this.http.get('/api/courses').subscribe(data=>{
      this.courses = data;
    })
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
