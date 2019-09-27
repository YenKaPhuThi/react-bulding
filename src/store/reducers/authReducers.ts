import {AUTH} from '../definitions';
import { createReducer } from 'typesafe-actions';
import { UserModel } from '../../models';
import {AppAction} from '../actions';
const initialAuth = {
  name: 'Harry',
  email: 'h@h.com',
  token: 'jkisa129dassd23asd4i32ds92w12sd12',
  refeshToken: 'jkisa129dassd23asd4i32ds92w12sd12',
} as UserModel.Login;

export const authReducers = createReducer<UserModel.Login, AppAction.AuthActions>(initialAuth)
  .handleAction(AUTH.ACTION_LOG_IN, (state, action) => Object.assign({}, state, action.payload) )
  .handleAction(AUTH.ACTION_LOG_IN_SUCCESS, (state, action) => {
    localStorage.setItem(AUTH.ACTION_SAVE_AUTH_TOKEN, AUTH.ACTION_FAKE_AUTH_TOKEN);
    return Object.assign({}, state, action.payload)
  } )
  .handleAction(AUTH.ACTION_LOG_OUT_SUCCESS, (state, action) => {
    return Object.assign({}, state, action.payload)
  } )
  .handleAction(AUTH.ACTION_LOG_OUT, (state, action) => {
    localStorage.removeItem(AUTH.ACTION_SAVE_AUTH_TOKEN);
    return Object.assign({}, state)
  } );