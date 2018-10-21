import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomegossipComponent } from './homegossip.component';

describe('HomegossipComponent', () => {
  let component: HomegossipComponent;
  let fixture: ComponentFixture<HomegossipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomegossipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomegossipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
