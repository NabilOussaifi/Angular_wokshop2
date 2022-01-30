import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductsComponentComponent } from './form-products-component.component';

describe('FormProductsComponentComponent', () => {
  let component: FormProductsComponentComponent;
  let fixture: ComponentFixture<FormProductsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProductsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
