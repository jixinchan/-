import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private http:HttpClient) { }
  tasks;
  ngOnInit() {
    this.http.get('/api/tasks').subscribe(data=>{
      console.log(data);
      this.tasks = data;
    })
  }

}
