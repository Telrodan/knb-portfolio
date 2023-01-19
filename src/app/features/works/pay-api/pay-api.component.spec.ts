import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayApiComponent } from './pay-api.component';

describe('PayApiComponent', () => {
  let component: PayApiComponent;
  let fixture: ComponentFixture<PayApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
