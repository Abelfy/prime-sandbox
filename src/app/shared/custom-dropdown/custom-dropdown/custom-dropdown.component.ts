import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'ps-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomDropdownComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CustomDropdownComponent,
      multi: true,
    },
  ]
})
export class CustomDropdownComponent implements OnInit, ControlValueAccessor,Validator,OnDestroy {

  //---------------- Variables ------------------

  selected!: FormControl;
  onTouched = () => {};
  onChange = (event : any ) => {
    this.selected.setValue(event.value);
  };

  @Input()
  public options : any[] = [];
  @Input()
  public optionLabel : string = 'label';
  @Input()
  public optionValue : string = 'label';


  //---------------- Functions ------------------
  constructor() { }
 
  
  ngOnInit(): void {
    this.selected = new FormControl();
  }

  writeValue(obj: any): void {
    this.selected.setValue(obj);
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if(this.selected.value == null){
      return {
        required: true
      }
    }
    return null;
  }

  registerOnChange(fn: any): void {
    this.selected.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy :>> ');
  }

}
