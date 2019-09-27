import API from "./APIUtils";
import { APP_CONSTANTS } from "../constants";
import { API_PATH } from "./constants";
class CardService extends API{
  constructor() {
    super(API_PATH.CARD_HOLDERS.PATH);
  }

  public searchItems(payload: APP_CONSTANTS.SEARCH_PAYLOAD) {
    return this.post(payload).then(res => {return res;});
  }

  public getItemDetail(payload: any) {
    return this.post(payload, API_PATH.CARD_HOLDERS.DETAIL).then(res => {return res;});
  }

  public getCardInfo(payload: any) {
    return this.post(payload, API_PATH.CARD_HOLDERS.INFO).then(res => {return res;});
  }

  public getCardHistory(payload: any) {
    return this.post(payload, API_PATH.CARD_HOLDERS.HISTORY).then(res => {return res;});
  }

}
  export default CardService;