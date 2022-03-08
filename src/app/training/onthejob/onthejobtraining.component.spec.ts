import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnthejobtrainingComponent } from './onthejobtraining.component';

describe('OnthejobtrainingComponent', () => {
  let component: OnthejobtrainingComponent;
  let fixture: ComponentFixture<OnthejobtrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnthejobtrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnthejobtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
