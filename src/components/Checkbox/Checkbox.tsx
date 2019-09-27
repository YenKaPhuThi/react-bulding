import React, { useEffect, useState, FormEvent } from 'react';
import cn from 'classnames';
import {Checkbox as cb} from './constants';
const Checkbox: React.FC<cb> = ({...props}) => {
    const [inputRef, setInputRef] = useState<HTMLInputElement | undefined>(undefined);

    const handleChangeCheckbox = (e: FormEvent<HTMLInputElement>) => {
        if(inputRef){
            props.isChecked = inputRef.checked;
            props.isIndeterminate = !props.isChecked;
            props.onPressCheck(e);
        }
    };

    useEffect(() => {
        if(inputRef){
            if(props.isIndeterminate){
                inputRef.indeterminate = props.isIndeterminate
            }
        }
    }, [inputRef, props.isIndeterminate]);

    return (
        <div className={cn("form-check", props.labelGroupClass)}>
            <input className={cn("form-check-input", props.inputClass)} defaultChecked={props.isChecked} type="checkbox" id={props.id}  ref={(el) => setInputRef(el as HTMLInputElement)} disabled={props.isDisabled} readOnly={props.isReadOnly} name={props.name} onChange={(e) => handleChangeCheckbox(e)} data-type-validate={props.typeValidate} data-validation-message={props.validationMessage}/>
            <label className={cn("form-check-label", props.labelClass)} htmlFor={props.id}>{props.labelName}</label>
        </div>
    )
}


Checkbox.defaultProps = {
    isChecked: false,
    isDisabled: false,
}

Checkbox.displayName = 'Checkbox';

export default Checkbox;