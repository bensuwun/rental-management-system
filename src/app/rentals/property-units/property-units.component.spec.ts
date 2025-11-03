import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyUnitsComponent } from './property-units.component';

describe('PropertyUnitsComponent', () => {
  let component: PropertyUnitsComponent;
  let fixture: ComponentFixture<PropertyUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyUnitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
