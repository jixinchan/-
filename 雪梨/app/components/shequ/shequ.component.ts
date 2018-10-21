import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { listener } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private http:HttpClient) { }
  list;
  tlist;
  ngOnInit() {
    this.http.get('/api/shequ').subscribe(data=>{
      this.list = data;
    });
    this.http.get('/api/shequl').subscribe(data=>{
      this.tlist = data;
    });
  }

}
