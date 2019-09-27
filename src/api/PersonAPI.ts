import API from "./APIUtils";
import { API_PATH } from "./constants";

class PersonService extends API{
    constructor() {
      super(API_PATH.PERSON.PATH);
    }

    public loadAlerts = (payload: any) => {
        return this.post(payload, API_PATH.PERSON.ALERTS).then(res => res);
    }
    
  }
  export default PersonService;