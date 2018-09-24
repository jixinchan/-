import { Component, EventEmitter, OnInit ,Input ,Output} from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  txt:string;
  @Output() getV = new EventEmitter();
  getValue(e){
    this.getV.emit(e)
  }
  @Output() Txt:EventEmitter<string> = new EventEmitter();
  sendTxt(e){
    this.Txt.emit(this.txt);
  }







  constructor() {
  }
  ngOnInit() {
  }
}