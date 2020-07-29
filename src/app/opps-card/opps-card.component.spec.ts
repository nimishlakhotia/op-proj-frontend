import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppsCardComponent } from './opps-card.component';

describe('OppsCardComponent', () => {
  let component: OppsCardComponent;
  let fixture: ComponentFixture<OppsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
