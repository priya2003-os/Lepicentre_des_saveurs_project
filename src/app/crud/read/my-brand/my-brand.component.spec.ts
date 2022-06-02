import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBrandComponent } from './my-brand.component';

describe('MyBrandComponent', () => {
  let component: MyBrandComponent;
  let fixture: ComponentFixture<MyBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
