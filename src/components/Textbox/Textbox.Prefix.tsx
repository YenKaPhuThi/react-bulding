import React from "react";
import Textbox from './Textbox';
import { TextboxPrefix as txtbox} from './constants';
const TextboxPrefix: React.FC<txtbox> = ({...props}) => {
    return (
        <Textbox>
            {props.hasLabel && (<label className={props.labelClass}>{props.labelValue}</label>)}
            {props.hasPrefix && (<span className={props.prefixClass}>{props.prefixValue}</span>)}
            <input type={props.htmlType} className={props.inputClass} value={props.data} placeholder={props.placeholder} tabIndex={props.tabIndex}/>
        </Textbox>
    )
}

TextboxPrefix.displayName = 'Textbox.Prefix';

TextboxPrefix.defaultProps = {
    htmlType: 'text',
    labelClass: 'form-control-label',
    prefixClass: 'prefix-value',
    inputClass: 'form-control',
};

export default TextboxPrefix;