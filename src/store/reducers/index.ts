import {combineReducers} from 'redux';
import {searchCardReducer, getCardDetail, getCardholderInfo, getCardholderHistory, getTransHistory, getFundings} from './cardReducers';
import {authReducers} from './authReducers';
const cardholderReducer = combineReducers({
    searchCardReducer,
    getCardDetail,
    getCardholderInfo,
    getCardholderHistory,
    getTransHistory,
    getFundings,
});

const rootReducer = combineReducers({
    cardholder: cardholderReducer,
    auth: authReducers
});

export default rootReducer;