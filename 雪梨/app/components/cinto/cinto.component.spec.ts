import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CintoComponent } from './cinto.component';

describe('CintoComponent', () => {
  let component: CintoComponent;
  let fixture: ComponentFixture<CintoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CintoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
