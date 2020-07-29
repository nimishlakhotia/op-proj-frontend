import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppsWishlistComponent } from './opps-wishlist.component';

describe('OppsWishlistComponent', () => {
  let component: OppsWishlistComponent;
  let fixture: ComponentFixture<OppsWishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppsWishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppsWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
