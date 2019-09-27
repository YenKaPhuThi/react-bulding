import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {APP_ROUTERS} from './constants';
import { connect } from 'react-redux';
import { AppState } from './store/states';
import {DynamicImport} from './helpers';
import './App.scss';
import { PrivateRoute } from './containers';

const mapStateToProps = (state: AppState) => ({
});

const mapDispatchToProps = {

};

type AppProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const App: React.FC<AppProps> = ({...props}) => {

  return (
      <Router>
          <Redirect from={APP_ROUTERS.INDEX} to={APP_ROUTERS.LANDING}/>
          <PrivateRoute path={APP_ROUTERS.LANDING} component={DynamicImport.initDynamicImport(() => import('./views/Dashboard'))}/>
          <Route exact path={APP_ROUTERS.SIGN_IN} component={DynamicImport.initDynamicImport(() => import('./views/LoginPage'))}/>
      </Router>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
