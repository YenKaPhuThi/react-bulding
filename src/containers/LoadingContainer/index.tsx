import React from 'react';

const Loading: React.FC = (props: any) =>  {
    if (props.error) {
      return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else if (props.pastDelay) {
      return <div className="loading">Loading...</div>;
    } else {
      return null;
    }
}

Loading.displayName = 'Loading';

export default Loading;