import React from 'react';

interface Logout {
    onLogout: (process: any) => void,
}

const LogoutButton: React.FC<Logout> = ({...props}) => {
    return (
        <button className="btn-link btn-link-primary mri-8" onClick={props.onLogout} >Logout</button>
    )
}

export default LogoutButton;