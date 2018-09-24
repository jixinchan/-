import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private local:Service1Service) { }
  
  txt:string;
  arr:Msg[]=[];
  alength:number=0;
  sendTxt(txt){
      this.txt=txt;
  }
  l:number=0;
  ml:number;
  getValue(e){
    if(e.keyCode==13){
      this.arr.push(new Msg(this.txt,false));
      this.local.set('ing'+this.l,this.txt);
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
    });
    this.local.set('l',this.alength);
    this.local.set('al',this.arr.length);
    this.local.set('ml',this.local.get('ml')&&(this.arr.length>Number(this.local.get('ml')))?this.arr.length:Number(this.local.get('ml')));
  }
  change(i){
    console.log(i);
    this.l=Number(this.local.get('al'));
    for(var p=0;p<this.l+2;p++){
      var id = this.local.getK(p);
      if(this.local.get(id)===this.arr[i].title){
        if(id.match(/^ed/)){
          this.local.set('ing'+i,this.local.get(id));
          this.local.remove(id);
        }else if(id.match(/^ing/)){
          this.local.set('ed'+i,this.local.get(id));
          this.local.remove(id);
        }break;
      }
    }
    this.arr[i].done=!this.arr[i].done;
    this.count();
  }
  delete(i){
    this.l=Number(this.local.get('al'));
    for(var p=0;p<this.l+2;p++){
      console.log(this.local.getK(p));
      if(this.local.get(this.local.getK(p))===this.arr[i].title){
        this.local.remove(this.local.getK(p));
        break;
      }
    }
    this.arr.splice(i,1);
    this.count();
  }
  ngOnInit() {
    this.l=Number(this.local.get('al'));
    if(this.local.get('al')){
      this.alength=Number(this.local.get('l'));
      this.ml=Number(this.local.get('ml'));
      for(var i=0;i<this.ml;i++){
        var d = "[a-z]+"+i;      
        for(var j=0;j<this.l+2;j++){
          if(this.local.getK(j).match(d)){
            if(this.local.getK(j).match(/^ed/)){
              this.arr.push(new Msg(this.local.get("ed"+i),true));
            }else if(this.local.getK(j).match(/^ing/)){
              this.arr.push(new Msg(this.local.get("ing"+i),false));
            }break;
          }
        }   
      }
    }
  }
}
export class Msg{
  constructor(tit,don){
    this.title=tit;
    this.done=don;
  };
  public title:string;
  public done:boolean
}