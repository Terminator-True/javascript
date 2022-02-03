import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitatsFormativesComponent } from './unitats-formatives.component';

describe('UnitatsFormativesComponent', () => {
  let component: UnitatsFormativesComponent;
  let fixture: ComponentFixture<UnitatsFormativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitatsFormativesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitatsFormativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
