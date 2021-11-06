import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JausmaiComponent } from './jausmai.component';

describe('JausmaiComponent', () => {
  let component: JausmaiComponent;
  let fixture: ComponentFixture<JausmaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JausmaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JausmaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
