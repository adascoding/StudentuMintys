import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagalbaComponent } from './pagalba.component';

describe('PagalbaComponent', () => {
  let component: PagalbaComponent;
  let fixture: ComponentFixture<PagalbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagalbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagalbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
