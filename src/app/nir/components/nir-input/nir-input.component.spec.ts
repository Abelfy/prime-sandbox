import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NirInputComponent } from './nir-input.component';

describe('NirInputComponent', () => {
  let component: NirInputComponent;
  let fixture: ComponentFixture<NirInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NirInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NirInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
