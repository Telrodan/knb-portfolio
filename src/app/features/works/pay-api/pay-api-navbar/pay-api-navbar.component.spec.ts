import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayApiNavbarComponent } from './pay-api-navbar.component';

describe('PayApiNavbarComponent', () => {
  let component: PayApiNavbarComponent;
  let fixture: ComponentFixture<PayApiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayApiNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayApiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
