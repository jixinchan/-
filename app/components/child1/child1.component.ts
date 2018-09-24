import { Component, OnInit ,Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() arr;
  @Input() txt;
  @Input() alength;
  @Output() cIndex:EventEmitter<number> = new EventEmitter();
  change(i){
    this.cIndex.emit(i);
  }
  @Output() dIndex:EventEmitter<number> = new EventEmitter();
  delete(i){
    this.dIndex.emit(i);
  }

  constructor() { }

  ngOnInit() {
  }

}
