import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFormArrayComponent } from './sub-form-array.component';

describe('SubFormArrayComponent', () => {
  let component: SubFormArrayComponent;
  let fixture: ComponentFixture<SubFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubFormArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
