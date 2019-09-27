import React from "react";
import Textbox from './Textbox';
import { TextboxSuffix as txtbox} from './constants';
const TextboxSuffix: React.FC<txtbox> = ({...props}) => {
    return (
        <Textbox>
            {props.hasLabel && (<label className={props.labelClass}>{props.labelValue}</label>)}
            <input type={props.htmlType} className={props.inputClass} value={props.data} placeholder={props.placeholder} tabIndex={props.tabIndex}/>
            {props.hasSuffix && (<span className={props.suffixClass}>{props.suffixValue}</span>)}
        </Textbox>
    )
}

TextboxSuffix.displayName = 'Textbox.Suffix';

TextboxSuffix.defaultProps = {
    htmlType: 'text',
    labelClass: 'form-control-label',
    suffixClass: 'prefix-value',
    inputClass: 'form-control',
};

export default TextboxSuffix;