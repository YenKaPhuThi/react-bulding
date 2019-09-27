import { APP_CONSTANTS } from "../constants";
import * as _ from 'lodash';
export class RouterHelpers{
    static className = APP_CONSTANTS.routerBodyClassName;
    static getRouterClassName (path: string){
        path = _.replace(path, '/', '');
        return this.className[path];
    }

    static getRouterBasedOnEndPoint(route: string, endpoint?: string){
        return route + endpoint;
    }

}
