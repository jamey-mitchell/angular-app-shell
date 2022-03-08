import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissiontrainingComponent } from './missiontraining.component';

describe('MissiontrainingComponent', () => {
  let component: MissiontrainingComponent;
  let fixture: ComponentFixture<MissiontrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissiontrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissiontrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
