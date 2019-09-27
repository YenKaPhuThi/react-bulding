import React from 'react';
import {FormControlStaticProps} from './constants';

const FormControlStatic: React.FC<FormControlStaticProps> = ({...props}) => {
    return (
        <div className="form-group-static">
            <div className="form-control-label">{props.labelName}</div>
            {props.children}
        </div>
    )
}

FormControlStatic.displayName = 'FormControl.Static';

export default FormControlStatic;