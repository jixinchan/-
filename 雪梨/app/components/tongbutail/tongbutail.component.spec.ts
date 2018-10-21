import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongbutailComponent } from './tongbutail.component';

describe('TongbutailComponent', () => {
  let component: TongbutailComponent;
  let fixture: ComponentFixture<TongbutailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongbutailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongbutailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
