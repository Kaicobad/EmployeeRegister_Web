import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingLicenseInfoComponent } from './driving-license-info.component';

describe('DrivingLicenseInfoComponent', () => {
  let component: DrivingLicenseInfoComponent;
  let fixture: ComponentFixture<DrivingLicenseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrivingLicenseInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrivingLicenseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
