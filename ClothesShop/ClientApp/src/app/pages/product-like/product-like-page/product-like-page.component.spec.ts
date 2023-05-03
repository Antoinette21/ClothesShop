import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLikePageComponent } from './product-like-page.component';

describe('ProductLikePageComponent', () => {
  let component: ProductLikePageComponent;
  let fixture: ComponentFixture<ProductLikePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLikePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLikePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
