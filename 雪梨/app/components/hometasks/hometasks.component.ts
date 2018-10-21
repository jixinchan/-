import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-hometasks',
  templateUrl: './hometasks.component.html',
  styleUrls: ['./hometasks.component.css']
})
export class HometasksComponent implements OnInit {

  constructor(private http:HttpClient) { }
  tasks;
  ngOnInit() {
    this.http.get('/api/hometasks').subscribe(data=>{
      this.tasks = data;
    })
  }


}
