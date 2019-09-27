import React, { Component, useEffect, useState } from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps, withRouter } from 'react-router-dom';
import { AppState } from '../../store/states';
import { APP_ROUTERS } from '../../constants';
import { connect } from 'react-redux';
import { AUTH } from '../../store/definitions';
import _ from 'lodash';

const mapStateToProps = (state: AppState) => ({
    loginData: state.auth
});
  
const mapDispatchToProps = {

};

type PrivateRouteProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

interface PrivateRouteModel extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<PrivateRouteProps & PrivateRouteModel & RouteComponentProps> = ({...props}) => {
  const { component: Component, loginData, ...rest } = props;
  const isHaveAuthToken = localStorage.getItem(AUTH.ACTION_SAVE_AUTH_TOKEN);
  const [isLogin, setIsLogin] = useState(!!isHaveAuthToken);

  useEffect(()=>{
    const checkAuth = localStorage.getItem(AUTH.ACTION_SAVE_AUTH_TOKEN);
    if(_.isUndefined(checkAuth)){
        setIsLogin(false);
    }else{
        setIsLogin(!!checkAuth)
    }
  }, )

  return (
      <Route
          {...rest}
          render={(routeProps) =>
            (isLogin || loginData.isLogin) ? (
                  <Component {...routeProps} />
              ) : (
                      <Redirect
                          push  
                          to={{
                              pathname: APP_ROUTERS.SIGN_IN,
                              state: { from: routeProps.location }
                          }}
                      />
                  )
          }
      />
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));