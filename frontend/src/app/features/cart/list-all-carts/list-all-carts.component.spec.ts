import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllCartsComponent } from './list-all-carts.component';

describe('ListAllCartsComponent', () => {
  let component: ListAllCartsComponent;
  let fixture: ComponentFixture<ListAllCartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAllCartsComponent]
    });
    fixture = TestBed.createComponent(ListAllCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
