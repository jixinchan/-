import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecoursesComponent } from './homecourses.component';

describe('HomecoursesComponent', () => {
  let component: HomecoursesComponent;
  let fixture: ComponentFixture<HomecoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
