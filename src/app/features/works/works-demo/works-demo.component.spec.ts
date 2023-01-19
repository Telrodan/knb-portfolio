import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksDemoComponent } from './works-demo.component';

describe('WorksDemoComponent', () => {
  let component: WorksDemoComponent;
  let fixture: ComponentFixture<WorksDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
