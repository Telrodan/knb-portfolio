import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayApiEasyToImplementComponent } from './pay-api-easy-to-implement.component';

describe('PayApiEasyToImplementComponent', () => {
  let component: PayApiEasyToImplementComponent;
  let fixture: ComponentFixture<PayApiEasyToImplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayApiEasyToImplementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayApiEasyToImplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
