import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayApiSimpleUiComponent } from './pay-api-simple-ui.component';

describe('PayApiSimpleUiComponent', () => {
  let component: PayApiSimpleUiComponent;
  let fixture: ComponentFixture<PayApiSimpleUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayApiSimpleUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayApiSimpleUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
