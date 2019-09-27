import API from "./APIUtils";
import {fakeAuth} from '../FakeAuth';
import { UserModel } from '../models';

class AuthService extends API{
    constructor() {
      super('');
    }

    public login = (payload: UserModel.Login) => {
        return fakeAuth.authenticate().then((res) => {res.isLogin = true; return res;});
    }

    public logout = (callback: void) => {
        return fakeAuth.signout(callback).then((res) => {res.isLogin = false; return res;});
    }
    
  }

export default AuthService;