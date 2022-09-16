import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, filter, pairwise, Subscription, tap } from 'rxjs';
import { SandboxActions, SandboxSelectors } from '../state/actions.type';
import { SandboxState } from '../state/sandbox.reducer';
import { Column, FormControlType, FormCustomEvent } from '../types/types.def';

@Component({
  selector: 'ps-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit, OnDestroy {
  tab = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.011, symbol: 'C' },
    { position: 7, name: 'Azote', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  public form: FormGroup = this._fb.group({
    subA: [{
      date: new Date(),
      addressLine: 'Salut',
      zipCode: "80480",
      city: "Dury"}, Validators.required],
    array: [null, Validators.required],
  });

  cols: Column[] = [
    {
      name: 'position',
      label: 'Position',
      type: FormControlType.NUMBER,
      isDisabled: true,
      validators: [Validators.required],
    },
    {
      name: 'name',
      label: 'Name',
      type: FormControlType.TEXT,
      isDisabled: false,
      validators: [Validators.required],
    },
    {
      name: 'weight',
      label: 'Weight',
      type: FormControlType.NUMBER,
      isDisabled: false,
      validators: [Validators.required],
    },
    {
      name: 'symbol',
      label: 'Symbol',
      type: FormControlType.SELECT,
      isDisabled: false,
      validators: [Validators.required],
      options: [
        { value: 'H', label: 'Hydrogen' },
        { value: 'He', label: 'Helium' },
        { value: 'Li', label: 'Lithium' },
        { value: 'Be', label: 'Beryllium' },
        { value: 'B', label: 'Boron' },
        { value: 'C', label: 'Carbon' },
        { value: 'N', label: 'Azote' },
        { value: 'O', label: 'Oxygen' },
        { value: 'F', label: 'Fluorine' },
        { value: 'Ne', label: 'Neon' },
      ],
    },
  ];

  formCustomEvent!: FormCustomEvent;
  previousData: any;
  formSub$!: Subscription;
  storeSub$!: Subscription;

  disableArray(value: any) {
    if (value.checked) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  constructor(private _fb: FormBuilder, private _store: Store<SandboxState>) {}

  ngOnInit(): void {
    this.form.patchValue({
      array: this.tab,
    }); 

    this.formSub$ = this.form.valueChanges
      .pipe(
        debounceTime(500),
        tap((currentValues) => {
          console.table(currentValues.array);
          if (currentValues.subA?.resetWeight) {
            this.formCustomEvent = {
              event: 'reset-weight',
            };
          }
        }),
        pairwise(),
        filter(([previous, current]) => {
          return previous !== current;
        }),
        tap(([prev, next]: [any, any]) => {
          if (prev.subA?.date && prev.subA?.date !== next.subA?.date) {
            this.formCustomEvent = {
              event: 'date',
              data: next.subA.date,
            };
          }
        }),
        tap(() => this.findInvalidControls())
      )
      .subscribe();
  }

  public findInvalidControls() {
    const invalid = [];
    for (const name in this.form.controls) {
      if (this.form.controls[name].invalid) {
        invalid.push(name);
      }
    }
    console.log(invalid);
    return invalid;
  }

  send() {}

  resetWeight() {
    this.formCustomEvent = {
      event: 'reset-weight',
    };
  }

  ngOnDestroy(): void {
    this.formSub$.unsubscribe();
    if (this.storeSub$) {
      this.storeSub$.unsubscribe();
    }
  }
}
