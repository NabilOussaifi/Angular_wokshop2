import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductComponentComponent } from './detail-product-component.component';

describe('DetailProductComponentComponent', () => {
  let component: DetailProductComponentComponent;
  let fixture: ComponentFixture<DetailProductComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProductComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
