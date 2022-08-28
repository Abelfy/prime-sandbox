import { Component, EventEmitter, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ps-sub-form',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SubFormComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: SubFormComponent,
      multi: true,
    },
  ],
})
export class SubFormComponent
  implements ControlValueAccessor, OnDestroy, Validator
{
  //----------------- Variables ----------------//

  onTouched = () => {};
  onValidatorChange: Function = () => {};
  onChangeSub$!: Subscription;
  form: FormGroup = this._fb.group({
    date: [new Date(), [Validators.required]],
    addressLine: [null, [Validators.required]],
    zipCode: [null, [Validators.required]],
    city: [null, [Validators.required]],
  });
  @Output()
  public resetWeightEmitter = new EventEmitter<string>()


  //----------------- Functions ---------------//

  constructor(private _fb: FormBuilder) {}

  /**
   * Ecouteur de changement d'event.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['event'].currentValue) {
      let { event, data } = changes['event'].currentValue;
      console.warn(
        `SandboxSubformAComponent - Received ${event} with data : ${
          data ? data : 'no values'
        }`
      );
    }
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.form.errors;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  writeValue(value: any): void {
    if (value) {
      this.form.patchValue(value);
    }
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
  registerOnChange(onChange: any): void {
    this.onChangeSub$ = this.form.valueChanges.subscribe(onChange);
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  public resetWeight(){
    this.resetWeightEmitter.emit('resetWeigth');
  }

  ngOnDestroy(): void {
    this.onChangeSub$.unsubscribe();
  }
}
