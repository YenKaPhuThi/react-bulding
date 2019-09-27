import API from "./APIUtils";
import { APP_CONSTANTS } from "../constants";
import { API_PATH } from "./constants";
class AccountService extends API{
    constructor() {
      super(API_PATH.ACCOUNT.PATH);
    }

    public getFunds(payload: APP_CONSTANTS.GET_FUNDS_PAYLOAD) {
      return this.post(payload , API_PATH.ACCOUNT.FUNDS).then(res => res);
    }
  
    public loadCommentCategories = (payload: any) => {
        return this.post(payload, API_PATH.ACCOUNT.COMMENT_CATEGORIES).then(res => res);
    }
    
    public loadTransactions = (payload: any) => {
        return this.post(payload, API_PATH.ACCOUNT.TRANSACTIONS).then(res => res);
    }
    
  }
  export default AccountService;