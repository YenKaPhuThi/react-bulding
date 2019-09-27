import { APP_CONSTANTS } from "../constants";
import * as _ from 'lodash';
export class SidekickLabelHelper{
    private static ResourceLabel = APP_CONSTANTS.resourceLabel;

    public static getSearchLabel(label: string){
        return this.ResourceLabel[label];
    }
}
