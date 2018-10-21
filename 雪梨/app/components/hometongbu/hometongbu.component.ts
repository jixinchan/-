import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-hometongbu',
  templateUrl: './hometongbu.component.html',
  styleUrls: ['./hometongbu.component.css']
})
export class HometongbuComponent implements OnInit {

  constructor(private http:HttpClient) { }
  courses;
  ngOnInit() {
    this.http.get('/api/courses').subscribe(data=>{
      console.log(data);
      this.courses = data;
    })

    // this.http.get('/api/courses').pipe(map(data=>{
    //   data.name = 'haha';
    //   return data;
    // })).pipe(filter(data=>{
      
    // })).subscribe(data=>{
    //   console.log(data);
    //   this.courses = data;
    // })
  }

}
