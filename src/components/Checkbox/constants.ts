import { FormEvent } from "react";

export interface Checkbox {
    labelGroupClass: string,
    checkboxClass?: string,
    id: string,
    name: string,
    labelName: string,
    labelClass?: string,
    inputClass?: string,
    isChecked?: boolean,
    isDisabled?: boolean,
    isReadOnly?: boolean,
    isIndeterminate?: boolean,
    typeValidate?: validateType,
    validationMessage?: string,
    onPressCheck: (event: FormEvent<HTMLInputElement>) => void,
}
type validateType = 'require' | 'email' | 'number' | 'date'
export interface CheckboxList {
    groupClass: GroupClassType,
    children: Checkbox[],
}

export interface CheckboxListCard extends Checkbox {
    groupClass: string,
    blockGroupClass: string,
    iconClass: string,
}

type GroupClassType = | "form-check-inline";