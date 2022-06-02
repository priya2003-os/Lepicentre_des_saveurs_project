import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOriginPaysComponent } from './page-origin-pays.component';

describe('PageOriginPaysComponent', () => {
  let component: PageOriginPaysComponent;
  let fixture: ComponentFixture<PageOriginPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOriginPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOriginPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
