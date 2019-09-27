import React from "react";
import cn from 'classnames';
import Button from "./Button";
import { ButtonLink as btn} from './constants';
const ButtonLink: React.FC<btn> = ({...props}) => {
    return (
        <a
            href={props.href} 
            target={props.target} 
            className={cn('btn-link', props.linkClass)} >
                <Button {...props} className={cn('btn-link',props.className)}>
                    {props.children}
                </Button>
        </a>
    )
}

ButtonLink.displayName = 'Button.Link';

export default ButtonLink;