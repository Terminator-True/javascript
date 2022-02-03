import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemple02Component } from './exemple02.component';

describe('Exemple02Component', () => {
  let component: Exemple02Component;
  let fixture: ComponentFixture<Exemple02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemple02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemple02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
