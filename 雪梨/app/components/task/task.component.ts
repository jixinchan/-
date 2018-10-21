import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  taskId:number;
  task;
  ngOnInit() {
    this.taskId = this.router.snapshot.params['taskId'];
    this.http.get('/api/tasks/'+this.taskId).subscribe(data=>{
      this.task = data;
    })
  }

}
