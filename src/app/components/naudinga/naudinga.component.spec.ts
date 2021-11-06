import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaudingaComponent } from './naudinga.component';

describe('NaudingaComponent', () => {
  let component: NaudingaComponent;
  let fixture: ComponentFixture<NaudingaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaudingaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaudingaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
