import React from 'react';
import sklogo from '../../assets/images/sk-logo.svg'
import firstDatalogo from '../../assets/images/fd-logo-white.svg'
// Import components.
import { Redirect } from 'react-router';
import useReactRouter from 'use-react-router';
import {RouterHelpers} from '../../helpers';
import { AppState } from '../../store/states';
import { connect } from 'react-redux';
import { authActions } from '../../store/actions';
import {APP_CONSTANTS, APP_ROUTERS} from '../../constants';

const mapStateToProps = (state: AppState) => ({
  loginData: state.auth
});

const mapDispatchToProps = {
  login: authActions.login
};

type LoginProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const LoginPage: React.FC<LoginProps> = ({...props}) => {
  const  {location} = useReactRouter();
  
  const login = () => {
    props.login(APP_CONSTANTS.initFakeLogin);
  };
  
  const getRouterClassName = (path: string) => {
    return RouterHelpers.getRouterClassName(path);
  };

  if(props.loginData.isLogin){
    return (
      <Redirect to={APP_ROUTERS.LANDING} />
    );
  }else{
    return (
      <div className={getRouterClassName(location.pathname)}>
          <div className="container-fluid">
            <div className="row sk-login-form-container">
              <div className="col-4">
                <div className="sk-login-form">
                  <img src={sklogo} alt="Sidekick" className="sk-login-branding mt-32" />
                  <button className="btn btn-primary btn-block btn-lg mt-80" onClick={login}>Login with Centrify</button>
                </div>
              </div>
            </div>
            <img src={firstDatalogo} alt="First Data" className="sk-login-fd-branding" />
            <div className="sk-footer">
              © 2018 First Data Corporation. All rights reserved
              <a href="/" className="ext-link ml-24">Privacy Policy</a>
            </div>
          </div>
      </div>
  );
  }
};

LoginPage.displayName = 'LoginPage';

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
