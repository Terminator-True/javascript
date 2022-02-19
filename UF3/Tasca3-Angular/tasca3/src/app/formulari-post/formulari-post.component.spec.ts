import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariPostComponent } from './formulari-post.component';

describe('FormulariPostComponent', () => {
  let component: FormulariPostComponent;
  let fixture: ComponentFixture<FormulariPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
