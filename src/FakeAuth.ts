import { APP_CONSTANTS } from "./constants";

export const fakeAuth = {
    authenticate(cb?: any) {
      return new Promise<any>((resolve) => {
        setTimeout(() => {
          if(cb){
            cb();
          }
          resolve(APP_CONSTANTS.initFakeLogin);
        }, 500)
      });
    },
    signout(cb?: any) {
      return new Promise<any>((resolve) => {
        setTimeout(() => {
          if(cb){
            cb();
          }
          resolve({});
        }, 500)
      });
    }
  };