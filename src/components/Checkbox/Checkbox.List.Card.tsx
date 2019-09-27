import React, {useEffect} from 'react';
import cn from 'classnames';
import {CheckboxListCard as cblc} from './constants';
const CheckboxListCard: React.FC<cblc> = ({...props}) => {

    return (
        <div className={cn("checkbox-list", props.blockGroupClass)}>
            <div className={cn("checkbox-list--item", props.groupClass)}>
                <input className={cn(props.inputClass)} defaultChecked={props.isChecked} type="checkbox" id={props.id}  ref={(el) => el && props.isIndeterminate && (el.indeterminate = props.isIndeterminate)} disabled={props.isDisabled} readOnly={props.isReadOnly} name={props.name} />
                <div className={cn("item-content", props.labelGroupClass)}>
                    <p className={cn("d-inline-flex", props.labelClass)}>
                        {props.labelName}
                        {props.iconClass && <i className={cn(props.iconClass)}></i>}
                    </p>
                </div>
                <div className="item-status"></div>
            </div>
        </div>
    )
}

CheckboxListCard.defaultProps = {
    iconClass: "icon-information",
    isIndeterminate: false,
}

CheckboxListCard.displayName = 'Checkbox.List.Card';

export default CheckboxListCard;