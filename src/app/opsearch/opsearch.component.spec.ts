import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsearchComponent } from './opsearch.component';

describe('OpsearchComponent', () => {
  let component: OpsearchComponent;
  let fixture: ComponentFixture<OpsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
