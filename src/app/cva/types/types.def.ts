import { ValidatorFn } from "@angular/forms";

export type FormCustomEvent = {
    event: string;
    data?: any;
}

export type Column ={
    name: string;
    label: string;
    type: FormControlType;
    isDisabled : boolean;
    options?: formSelectionOption[];
    validators?: ValidatorFn[];
}

export type formSelectionOption = {
    value: any;
    label: string;
}


export enum FormControlType {
    NUMBER = 'number',
    TEXT = 'text',
    SELECT = 'select',
    CHECKBOX = 'checkbox',
    RADIO = 'radio',
    TEXTAREA = 'textarea',
    FILE = 'file',
    IMAGE = 'image',
    PASSWORD = 'password',
    HIDDEN = 'hidden',
}