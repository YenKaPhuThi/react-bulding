import React from "react";
import cn from 'classnames';
import {Button as btn} from './constants';

const Button: React.FC<btn> = ({...props}) => {
    return (
        <button
            {...props.otherProps}
            type={props.htmlType} 
            className={cn(
                'btn-icon', 
                props.size, 
                props.color,
                {
                    'rc-button--ghost': props.ghost,
                    'rc-button--text': props.text,
                },
                props.className)} 
            disabled={props.disabled} 
            ref={props.buttonRef} 
            onClick={props.onClickHandle}>
                {React.Children.map(props.children, (item, key) => {
                    /* wrapper children by span tags for fix bugs css */
                    if (typeof item === 'string' || typeof item === 'number') {
                        return <span key={key}>{item}</span>;
                    }

                    return item;
                })}
        </button>
    )
}

Button.displayName = 'Button.Icon';

Button.defaultProps = {
    htmlType: 'button',
};

export default Button;