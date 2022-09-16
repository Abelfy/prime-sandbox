import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'ps-nir-input',
  templateUrl: './nir-input.component.html',
  styleUrls: ['./nir-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NirInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NirInputComponent),
      multi: true
    }
  ]
})
export class NirInputComponent implements OnInit, ControlValueAccessor, Validator, OnDestroy {


  onTouched : Function = () => {};
  onValidatorChange: Function = () => {};
  onChangeSub$!: Subscription; 

  private _nir : string;
  public form : FormGroup = this._fb.group({
    sexe :[null, Validators.compose([Validators.required, Validators.maxLength(1),Validators.pattern('[0-9]*')])],
    annee : [null, Validators.compose([Validators.required, Validators.maxLength(2)])],
    mois : [null, Validators.compose([Validators.required, Validators.maxLength(2)])],
    departement : [null, Validators.compose([Validators.required, Validators.maxLength(2),Validators.pattern('[0-9A-Z]*')])],
    commune : [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
    ordre : [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
    cle: [null, Validators.compose([Validators.required, Validators.maxLength(2)])]
  });



  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
  }
  writeValue(obj: any): void {
    this._nir = obj;
    this.form.patchValue(this.splitNir(obj));
  }



  splitNir(nir : string) : any {
    return {
      sexe : nir.substr(0,1),
      annee : nir.substr(1,2),
      mois : nir.substr(3,2),
      departement : nir.substr(5,2),
      commune : nir.substr(7,3),
      ordre : nir.substr(10,3),
      cle : nir.substr(13,2)
    }
  }

  onDigitInput(event) {
    let element;
    if (
      event.code !== 'Backspace' &&
      event.srcElement.value.length === event.srcElement.maxLength
    ) {
      element = event.srcElement.nextElementSibling;
    }

    if (event.code === 'Backspace' && event.srcElement.value.length === 0) {
      element = event.srcElement.previousElementSibling;
    }
    if (element == null) return;
    else element.focus();
  }

  registerOnChange(fn: any): void {
    this.onChangeSub$ = this.form.valueChanges.pipe(map(newValue => {
      return Object.values(newValue).join('');
    })).
    subscribe(fn);
  }
  registerOnTouched(onTouched: Function): void {
    this.onTouched = onTouched;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
  validate(control: AbstractControl<any, any>): ValidationErrors {
    console.log({...this.form.errors , minLength : true});
    
    return {...this.form.errors , minLength : true};
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }
  ngOnDestroy(): void {
    if(this.onChangeSub$){
      this.onChangeSub$.unsubscribe();
    }
  }
}