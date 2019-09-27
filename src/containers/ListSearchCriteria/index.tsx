import React from 'react';
import { APP_CONSTANTS } from '../../constants';

const ListSearchGuild: React.FC = ({...props}) => {
    const list = Object.entries(APP_CONSTANTS.resourceLabel).map(([key, value]: any, index: number) => {
        return (
               <li key={key}>
                    <span className="text-grey-d20 d-block">{value.label}</span>
                    <span className="d-block">
                        {value.format}
                        {value.ex && <span className="d-inline-block">{value.ex}</span>}
                    </span>
                </li>
        );
    });

    return (
        <React.Fragment>
            {list}
        </React.Fragment>
    );
};

ListSearchGuild.displayName = 'ListSearchGuild';
export default ListSearchGuild;