import React from 'react';

const Welcome : React.FC = () => {

    return (
        <div className="sk-welcome-msg-container">
            <h2>Welcome to Sidekick</h2>
        </div>
    )
}
Welcome.displayName = 'Welcome';
export default Welcome;