import React, {useState, useEffect} from "react";
import Textbox from './Textbox';
import { Textbox as txtbox} from './constants';
const TextboxInput: React.FC<txtbox> = ({...props}) => {
    const  [inputClass, setInputClass] = useState('');
    const  [inputData, setInputData] = useState(props.data);

    useEffect(()=> {
        setInputData(props.data);
        handleInputHasData(props.data)
    },[props.data]);

    const handleInputHasData = (data: any) => {
        if(data){
            setInputClass(' active');
        }else{
            setInputClass('');
        }
    }

    const onHandleTextboxClass = (evt: any, isFocus: boolean) =>{
        var value = getValueFromEvt(evt);
        if(isFocus){
            if(props.hasActive){
                setInputClass(' focus');
            }else{
                setInputClass(' active focus');
            }
        }else{
            if(value.length){
                setInputClass(' active');
            }else{
                setInputClass('');
            }
            
        }
    }

    const onHandleTextboxChange = (evt: any) => {
        var value = getValueFromEvt(evt);
        if(value.length){
            setInputClass(' active');
        }else{
            setInputClass('');
        }

        props.onChange(evt, props.typeValidate);
    }

    const getValueFromEvt = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        return value;
    }

    return (
        <Textbox className={props.className + inputClass} hasActive={props.hasActive}>
            {props.hasLabel && (<label htmlFor="" className={props.labelClass}>{props.labelValue}</label>)}
            <input type={props.htmlType} name={props.name} className={props.inputClass} value={inputData} placeholder={props.placeholder} tabIndex={props.tabIndex} onFocus={(e) => onHandleTextboxClass(e, true)} onBlur={(e) => onHandleTextboxClass(e, false)} onChange={ (e) => { onHandleTextboxChange(e) }} data-type-validate={props.typeValidate} data-validation-message={props.validationMessage}/>
        </Textbox>
    )
}

TextboxInput.displayName = 'Textbox.Input';

TextboxInput.defaultProps = {
    htmlType: 'text',
    labelClass: 'form-control-label',
    inputClass: 'form-control',
};

export default TextboxInput;