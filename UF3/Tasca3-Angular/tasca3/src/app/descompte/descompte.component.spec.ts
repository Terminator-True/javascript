import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescompteComponent } from './descompte.component';

describe('DescompteComponent', () => {
  let component: DescompteComponent;
  let fixture: ComponentFixture<DescompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
