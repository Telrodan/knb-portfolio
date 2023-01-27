import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayApiWhoWeWorkWithComponent } from './pay-api-who-we-work-with.component';

describe('PayApiWhoWeWorkWithComponent', () => {
  let component: PayApiWhoWeWorkWithComponent;
  let fixture: ComponentFixture<PayApiWhoWeWorkWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayApiWhoWeWorkWithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayApiWhoWeWorkWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
