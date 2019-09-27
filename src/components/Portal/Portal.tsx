import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

const PortalWrapper: React.FC = ({...props}) => {
    const element = document.createElement('div');

    useEffect(() => {
        if(rootElement){
            rootElement.appendChild(element);
            return () => {
                rootElement.removeChild(element);
            }
        }
    });

    return ReactDOM.createPortal(
        props.children,
        element,
    );
}

export default PortalWrapper;