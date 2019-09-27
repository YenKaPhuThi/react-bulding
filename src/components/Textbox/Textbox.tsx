import React from "react";
import cn from 'classnames';
import { Textbox as txtbox} from './constants';
const Textbox: React.FC<txtbox> = ({...props}) => {
    return (
        <div className={cn('form-group', 
                props.color, 
                props.size, 
                props.className,
                {
                    'form-with-affix': props.hasPrefix || props.hasSuffix,
                    'with-icon': props.hasIcon,
                    'active': props.hasActive,
                })}>
                    {
                        props.children
                    }
        </div>
    )
}

Textbox.displayName = 'Textbox';

Textbox.defaultProps = {
    htmlType: 'text',
};

export default Textbox;