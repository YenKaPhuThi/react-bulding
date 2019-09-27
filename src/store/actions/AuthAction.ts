import {createAction} from 'typesafe-actions';
import {AUTH} from '../definitions';
import { UserModel } from '../../models';

export const authActions = {
    login: createAction(AUTH.ACTION_LOG_IN, action => (data: UserModel.Login) => action(data)),
    loginSuccess: createAction(AUTH.ACTION_LOG_IN_SUCCESS, action => (data: UserModel.Login) => action(data)),
    logout: createAction(AUTH.ACTION_LOG_OUT, action => () => action()),
    logoutSuccess: createAction(AUTH.ACTION_LOG_OUT_SUCCESS, action => (data: UserModel.Login) => action(data)),
}