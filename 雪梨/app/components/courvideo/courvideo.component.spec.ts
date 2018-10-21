import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourvideoComponent } from './courvideo.component';

describe('CourvideoComponent', () => {
  let component: CourvideoComponent;
  let fixture: ComponentFixture<CourvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
