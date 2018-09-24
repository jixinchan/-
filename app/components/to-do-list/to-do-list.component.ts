import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // fun1(){
  //   var add = document.getElementById("add").value;
  //   var newbtn = document.createElement("button");
  //   var newli = document.createElement("li");
  //   var newbox = document.createElement("input");
  //   var pul = document.getElementById("list1");
  //   var nul = document.getElementById("list2");
  //   newbtn.innerHTML = "删除";
  //   newbtn.onclick = function(){
  //     this.parentNode.parentNode.removeChild(this.parentElement);
  //   }
  //   newbox.type = "checkbox";
  //   newbox.onclick = function(){
  //     if(this.checked == true){
  //       nul.appendChild(this.parentElement);
  //     }
  //     else{
  //       pul.appendChild(this.parentElement);
  //     }
  //   }
  //   newli.innerHTML = add;
  //   newli.appendChild(newbtn);
  //   newli.appendChild(newbox);
  //   pul.appendChild(newli);
  // }
  txt:string;
  alength:number=0;
  arr:Msg[]=[];
  //arr:Object[]=[];
  //arr1:string[]=[];
  getValue(e){
    if(e.keyCode==13){
      this.arr.push(new Msg(this.txt,false));
      console.log(this.txt);
      this.txt="";
      this.count();
    }
  }
  count(){
    this.alength=0;
    this.arr.forEach((value,index)=>{
      if(!value.done){
        this.alength++;
      }
    })
  }
  delete(i){
    this.arr.splice(i,1);
    this.count();
  }
  // delete2(i){
  //   this.arr1.splice(i,1);
  // }
  change(i){
    this.arr[i].done=!this.arr[i].done;
    this.count();
  }
  // change2(i){
  //   let ele=this.arr1.splice(i,1);
  //   this.arr.push(ele[0]);
  // }
}
//export使这个类暴露出去
export class Msg{
  constructor(tit,don){
    this.title=tit;
    this.done=don;
  };
  public title:string;
  public done:boolean
}