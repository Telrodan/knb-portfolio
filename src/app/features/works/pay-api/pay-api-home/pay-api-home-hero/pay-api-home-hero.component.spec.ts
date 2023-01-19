import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayApiHomeHeroComponent } from './pay-api-home-hero.component';

describe('PayApiHomeHeroComponent', () => {
  let component: PayApiHomeHeroComponent;
  let fixture: ComponentFixture<PayApiHomeHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayApiHomeHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayApiHomeHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
