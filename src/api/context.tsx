import React from 'react';
import CardService from './CardAPI';
import AuthService from './AuthAPI';

const APIContext = React.createContext<CardService | AuthService | null>(null);
  
export const withAPI = (Component : React.ReactType) => (props: any) => (
    <APIContext.Consumer>
        {api => <Component  {...props} api={api} />}
    </APIContext.Consumer>
);

export default APIContext;