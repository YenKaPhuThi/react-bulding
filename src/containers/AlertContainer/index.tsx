import React from 'react';
import cn from 'classnames';
import { Alert } from '../../models';

interface AlertProps{
    data?: Alert[],
}

const Alerts: React.FC<AlertProps> = ({...props}) =>{
    return (
        <div className="inline-message-container">
            {props.data && props.data.map((item: any, index: number) =>
                <div key={index} className={cn("inline-message", item.CssColorClass)}>
                {item._Alert}
                </div>
            )}
        </div>
    )
}

Alerts.displayName = 'Alerts';
export default Alerts;