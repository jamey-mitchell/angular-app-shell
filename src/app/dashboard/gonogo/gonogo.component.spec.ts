import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GonogoComponent } from './gonogo.component';

describe('GonogoComponent', () => {
  let component: GonogoComponent;
  let fixture: ComponentFixture<GonogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GonogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GonogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
