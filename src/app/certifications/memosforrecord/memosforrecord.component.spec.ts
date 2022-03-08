import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemosforrecordComponent } from './memosforrecord.component';

describe('MemosforrecordComponent', () => {
  let component: MemosforrecordComponent;
  let fixture: ComponentFixture<MemosforrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemosforrecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemosforrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
