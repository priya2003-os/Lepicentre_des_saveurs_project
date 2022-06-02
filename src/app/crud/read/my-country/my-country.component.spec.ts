import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCountryComponent } from './my-country.component';

describe('MyCountryComponent', () => {
  let component: MyCountryComponent;
  let fixture: ComponentFixture<MyCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
