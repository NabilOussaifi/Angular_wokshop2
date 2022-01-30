import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FProductComponent } from './f-product.component';

describe('FProductComponent', () => {
  let component: FProductComponent;
  let fixture: ComponentFixture<FProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
