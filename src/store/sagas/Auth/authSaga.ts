import {call, put, getContext} from 'redux-saga/effects';
import { AUTH } from '../../definitions';
import AppAPI from '../../../api';
import {AppAction} from '../../actions';
const authService = new AppAPI.AuthService();

export function* login(action: AppAction.LoginActions){
    try{
        const login = yield call(authService.login, action.payload);
        yield put({type: AUTH.ACTION_LOG_IN_SUCCESS, payload: login});
    }catch(e){
        yield put({type: AUTH.ACTION_LOG_IN_FAILURE})
    }
}

export function* logout(action: AppAction.LogoutActions){
    try{
        const logout = yield call(authService.logout);
        yield put({type: AUTH.ACTION_LOG_OUT_SUCCESS, payload: logout})
    }catch(e){
        yield put({type: AUTH.ACTION_LOG_OUT_SUCCESS})
    }
}