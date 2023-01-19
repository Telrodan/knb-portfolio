import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayApiHomeComponent } from './pay-api-home.component';

describe('PayApiHomeComponent', () => {
  let component: PayApiHomeComponent;
  let fixture: ComponentFixture<PayApiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayApiHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayApiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
