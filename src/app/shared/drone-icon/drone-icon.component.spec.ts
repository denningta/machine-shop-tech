import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneIconComponent } from './drone-icon.component';

describe('DroneIconComponent', () => {
  let component: DroneIconComponent;
  let fixture: ComponentFixture<DroneIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroneIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
