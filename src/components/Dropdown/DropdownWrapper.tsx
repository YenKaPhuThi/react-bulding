import React from "react";
import cn from 'classnames';
import {DropdownWarpper as dpn} from './constants';

const DropdownWrapper: React.FC<dpn> = ({...props}) => {
    return (
        <div className={cn(
            {
                'form-group': !props.hasBorderLess,
            },
            props.openPositionClass,
            props.className, 
        )}>
            {props.hasLable && <label htmlFor={props.dropdownId} className={cn('form-control-label', props.labelClassName)}>{props.labelValue}</label> }
            {props.children}
      </div>
    )
}

DropdownWrapper.displayName = 'DropdownWrapper';

export default DropdownWrapper;