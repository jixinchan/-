import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  course;
  num=1;
  headers = new HttpHeaders({});
  ngOnInit() {
    // this.http.get('/api/courses').subscribe((data)=>{
    //   console.log(data);
    //   this.course = data;
    // });
    this.http.post('/api',{name:'xinxin'},{headers:this.headers}).subscribe((data)=>{
      console.log(data);
    });
  }
  ngOnDestory(){
  }

}
