import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-homecourses',
  templateUrl: './homecourses.component.html',
  styleUrls: ['./homecourses.component.css']
})
export class HomecoursesComponent implements OnInit {

  constructor(private http:HttpClient) { }
  hcourses;
  ngOnInit() {
    this.http.get('/api/hcourses').subscribe(data=>{
      this.hcourses = data;
    })
  }

}
