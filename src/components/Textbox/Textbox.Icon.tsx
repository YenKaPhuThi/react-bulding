import React from "react";
import Textbox from './Textbox';
import { TextboxIcon as TxtboxIcon} from './constants';
const TextboxIcon: React.FC<TxtboxIcon> = ({...props}) => {
    return (
        <Textbox>
            {props.hasIcon && (<label className={props.iconClass}></label>)}
            <input type={props.htmlType} className={props.inputClass} value={props.data} placeholder={props.placeholder} tabIndex={props.tabIndex}/>
        </Textbox>
    )
}

TextboxIcon.displayName = 'Textbox.Input';

TextboxIcon.defaultProps = {
    htmlType: 'text',
    iconClass: 'icon-search',
    inputClass: 'form-control',
};

export default TextboxIcon;