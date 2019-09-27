import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter, RouteComponentProps} from 'react-router-dom';
import { Header} from '../../containers';
import {APP_ROUTERS} from '../../constants';
import {DynamicImport} from '../../helpers';
import DynamicForm from '../DynamicForm'

const Dashboard: React.FC<& RouteComponentProps<{}>> = () => {
  return (
    <div className="sk-body">
        <Header />
        <Switch>
          <Route exact path={APP_ROUTERS.HOME} component={DynamicImport.initDynamicImport(() => import('../HomePage'))}/>
          <Route exact path={APP_ROUTERS.CARD_DETAIL} component={DynamicImport.initDynamicImport(() => import('../CardInfo'))}/>
          <Redirect to={{ state: { error: true }}} />
        </Switch>
    </div>
  );
};

export default withRouter(Dashboard);
