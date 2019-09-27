import {createAction} from 'typesafe-actions';
import { CARD } from '../definitions';
import { APP_CONSTANTS } from '../../constants';
import { History } from 'history';

export const cardHolderActions = {
    loadCards: createAction(CARD.ACTION_LOAD_CARDS_SUCCESS, action => (data: APP_CONSTANTS.LOAD_CARDS_DATA) => action(data)),
    searchCard: createAction(CARD.ACTION_SEARCH_CARD, action => (payload: APP_CONSTANTS.SEARCH_PAYLOAD) => action(payload)),
    resetSearch: createAction(CARD.ACTION_RESET_SEARCH_FLAG, action => () => action()),
    getCardDetail: createAction(CARD.ACTION_LOAD_CARD_DETAIL, action => () => action()),
    loadCardDetail: createAction(CARD.ACTION_LOAD_CARD_DETAIL_SUCCESS, action => 
        (data: APP_CONSTANTS.LOAD_DETAIL_DATA) => {
            return action(data);
        }
        ),
    getFunds: createAction(CARD.ACTION_LOAD_FUNDS, action => (payload: APP_CONSTANTS.GET_FUNDS_PAYLOAD) => action(payload)),
    loadFunds: createAction(CARD.ACTION_LOAD_FUNDS_SUCCESS, action => (payload: APP_CONSTANTS.LOAD_FUNDS_DATA) => action(payload)),
    getCommentCategories: createAction(CARD.ACTION_LOAD_COMMENT_CATEGORIES, action => (payload: APP_CONSTANTS.GET_COMMENT_CATEGORIES_PAYLOAD) => action(payload)),
    loadCommentCategories: createAction(CARD.ACTION_LOAD_COMMENT_CATEGORIES_SUCCESS, action => (payload: APP_CONSTANTS.LOAD_COMMENT_CATEGORIES_DATA) => action(payload)),
    getAlert: createAction(CARD.ACTION_LOAD_ALERTS, action => (payload: APP_CONSTANTS.GET_ALERT_PAYLOAD) => action(payload)),
    loadAlert: createAction(CARD.ACTION_LOAD_ALERTS_SUCCESS, action => (payload: APP_CONSTANTS.LOAD_ALERTS_DATA) => action(payload)),
    getTrans: createAction(CARD.ACTION_LOAD_TRANS, action => (payload: APP_CONSTANTS.GET_TRANS_PAYLOAD) => action(payload)),
    loadTrans: createAction(CARD.ACTION_LOAD_TRANS_SUCCESS, action => (payload: APP_CONSTANTS.LOAD_TRANS_DATA) => action(payload)),
    getCardholderInfo: createAction(CARD.ACTION_GET_CARDHOLDER_INFO, action => (payload: APP_CONSTANTS.GET_CARDHOLDER_INFO) => action(payload)),
    loadCardholderInfo: createAction(CARD.ACTION_LOAD_CARDHOLDER_INFO_SUCCESS, action => (payload: APP_CONSTANTS.LOAD_CARDHOLDER_INFO) => action(payload)),
    saveCardholderInfo: createAction(CARD.ACTION_SAVE_CARDHOLDER_INFO, action => (payload: APP_CONSTANTS.SAVE_CARD_INFO)=> action(payload)),
    storeCardholderInfo: createAction(CARD.ACTION_SAVE_CARDHOLDER_INFO_SUCCESS, action => (payload: APP_CONSTANTS.SAVE_CARD_INFO)=> action(payload)),
    getCardholderHistory: createAction(CARD.ACTION_GET_CARDHOLDER_HISTORY, action => (payload: APP_CONSTANTS.GET_CARD_HISTORY)=> action(payload)),
    loadCardholderHistory: createAction(CARD.ACTION_LOAD_CARDHOLDER_HISTORY, action => (payload: APP_CONSTANTS.LOAD_CARD_HISTORY)=> action(payload)),
};