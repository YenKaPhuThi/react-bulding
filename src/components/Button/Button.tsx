import React from "react";
import cn from 'classnames';
import {Button as btn} from "./constants";

const Button: React.FC<btn> = ({...props}) => {

    return (
        <button
            {...props.otherProps}
            type={props.htmlType} 
            className={cn(
                'btn', 
                props.size, 
                props.color,
                {
                    'rc-button--ghost': props.ghost,
                    'rc-button--text': props.text,
                },
                props.className)} 
            disabled={props.disabled}
            onClick ={props.onClickHandle}
            ref={props.buttonRef} >
                {props.children}
        </button>
    )
}

Button.displayName = 'Button';

Button.defaultProps = {
    htmlType: 'button',
};

export default Button;