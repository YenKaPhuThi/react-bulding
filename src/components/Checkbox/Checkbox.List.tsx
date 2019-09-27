import React from 'react';
import cn from 'classnames';
import {CheckboxList as cbl} from './constants';
const CheckboxList: React.FC<cbl> = ({...props}) => {
    
    return (
        <div className={cn("form-check-list", props.groupClass)}>
            {props.children}
        </div>
    )
}

CheckboxList.displayName = 'Checkbox.List';

export default CheckboxList;