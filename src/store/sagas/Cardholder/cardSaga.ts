import {call, put, take, select, all} from 'redux-saga/effects';
import { CARD, APP } from '../../definitions';
import AppAPI from '../../../api';
import { initialSearchCardsState } from '../../definitions/AppDefine';
import { AppAction } from '../../actions';
import * as _ from 'lodash';

const cardAPI = new AppAPI.CardService();
const personAPI = new AppAPI.PersonService();
const accountAPI = new AppAPI.AccountService();

const isSearchCard = {
    isSearchCard: true
};

export function* searchCardsSaga(action: AppAction.SearchAction){
    try{
        //get list card holder
        if(action.payload.keySearch.length){
            const cardholders = yield call(cardAPI.searchItems.bind(cardAPI), action.payload); 
            //tell the store to save list cardholder and active load card list
            yield put({type: CARD.ACTION_LOAD_CARDS_SUCCESS, payload: {...cardholders.data, ...isSearchCard}})
        }else{
            yield put({type: CARD.ACTION_LOAD_CARDS_SUCCESS, payload: {...initialSearchCardsState, ...isSearchCard}})
        }
    }catch(error){
        yield put({type: APP.ACTION_FETCH_FAILED, error});
    }
}

export function* loadCardholderInfo(action: AppAction.GetCardholderInfo){
    try{
        const cardholdersInfo = yield call(cardAPI.getCardInfo.bind(cardAPI, action.payload)); 
        //tell the store to save list cardholder and active load card
        yield put({type: CARD.ACTION_LOAD_CARDHOLDER_INFO_SUCCESS, payload: cardholdersInfo.data.Data})
    }catch(error){
        yield put({type: APP.ACTION_FETCH_FAILED, error});
    }
}

export function* saveCardholderInfo(action: AppAction.SaveCardholderInfo){
    try{
        const cardholdersInfo = action.payload;
        //tell the store to save 
        yield put({type: CARD.ACTION_LOAD_CARDHOLDER_INFO_SUCCESS, payload: cardholdersInfo})
    }catch(error){
        yield put({type: APP.ACTION_FETCH_FAILED, error});
    }
}

export function* loadCardholderHistory(action: AppAction.GetCardholderHistory){
    try{
        const cardholderHistory = yield call(cardAPI.getCardHistory.bind(cardAPI, action.payload));
        //tell the store to save 
        yield put({type: CARD.ACTION_LOAD_CARDHOLDER_HISTORY, payload: cardholderHistory.data})
    }catch(error){
        yield put({type: APP.ACTION_FETCH_FAILED, error});
    }
}

const getCardholders = (state: any) => state.cardholders;

export function* loadCard(){
    try{
        //wait for the cards to be loaded
        yield take(CARD.ACTION_LOAD_CARDS_SUCCESS);
        //take cards from store
        const cardholders = yield select(getCardholders);
        //tell the store we're really to be displayed
        yield put({type: CARD.ACTION_READY_DISPLAY_CARDS, payload: cardholders})
    }catch(error){
        yield put({type: APP.ACTION_FETCH_FAILED, error});
    }
}

export function* getFunds(action: AppAction.LoadFunds){
    try{
        const funds = yield call(accountAPI.getFunds.bind(accountAPI), action.payload);
        yield put({type: CARD.ACTION_LOAD_FUNDS_SUCCESS, payload: funds.data})
    }catch(error){
        yield put({type: APP.ACTION_FETCH_FAILED, error});
    }
}

export function* getCommentCategories(action: AppAction.LoadCommentCategories){
    try{
        const commentCategories = yield call(accountAPI.loadCommentCategories.bind(accountAPI), action.payload);
        yield put({type: CARD.ACTION_LOAD_COMMENT_CATEGORIES_SUCCESS, payload: commentCategories.data})
    }catch(error){
        yield put({type: APP.ACTION_FETCH_FAILED, error});
    }
}

export function* getAlert(action: AppAction.LoadAlert){
    try{
        const alerts = yield call(personAPI.loadAlerts.bind(personAPI), action.payload);
        yield put({type: CARD.ACTION_LOAD_ALERTS_SUCCESS, payload: alerts.data});
    }catch(error){
        yield put({type: APP.ACTION_FETCH_FAILED, error});
    }
}

export function* getTrans(action: AppAction.LoadTrans){
    try{
        const transactions = yield call(accountAPI.loadTransactions.bind(accountAPI), action.payload);
        yield put({type: CARD.ACTION_LOAD_TRANS_SUCCESS, payload: transactions.data});
    }catch(error){
        yield put({type: APP.ACTION_FETCH_FAILED, error});
    }
}

export function* loadCardDetail(action: any){
    try{
        const cardDetail = yield all([
            //call(cardAPI.getItemDetail.bind(cardAPI), action.payload),
            //call(accountAPI.getFunds.bind(accountAPI), action.payload),
            //call(accountAPI.loadCommentCategories.bind(accountAPI),action.payload),
            //call(personAPI.loadAlerts.bind(personAPI), action.payload),
            //call(accountAPI.loadTransactions.bind(accountAPI),action.payload),
        ]);
        const mappingCardDetail = _.map(cardDetail, 
            (item: any) => {
                return item.data.Data;
            }
        );

        yield put({type: CARD.ACTION_LOAD_CARD_DETAIL_SUCCESS, payload: {Data: mappingCardDetail}});
    }catch(error){
        yield put({type: APP.ACTION_FETCH_FAILED, error});
    }
}

