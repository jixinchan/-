import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenotiComponent } from './homenoti.component';

describe('HomenotiComponent', () => {
  let component: HomenotiComponent;
  let fixture: ComponentFixture<HomenotiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomenotiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomenotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
