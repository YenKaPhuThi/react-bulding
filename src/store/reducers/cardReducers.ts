import {CardModel, ListTransHistory, ListFund} from '../../models';
import {CARD} from '../definitions';
import {AppAction} from '../actions';
import { initialSearchCardsState , initialCardDetailState} from '../definitions/AppDefine';
import { createReducer } from 'typesafe-actions';
import { APP_CONSTANTS } from '../../constants';

export const searchCardReducer = createReducer<CardModel.SearchCardholders, AppAction.CardHolderActions>(initialSearchCardsState)
  .handleAction(CARD.ACTION_SEARCH_CARD, (state, action) => (Object.assign({}, state, action.payload)) )
  .handleAction(CARD.ACTION_LOAD_CARDS_SUCCESS, (state, action) => Object.assign({}, state, action.payload) );

export const getCardDetail = createReducer<CardModel.CardDetail, AppAction.CardHolderActions>(initialCardDetailState)
.handleAction(CARD.ACTION_LOAD_CARD_DETAIL, (state, action) => Object.assign({}, state) )
.handleAction(CARD.ACTION_LOAD_CARD_DETAIL_SUCCESS, (state, action) => {
  return Object.assign({}, state, action.payload);
} );

export const getCardholderInfo = createReducer<CardModel.CardholderInfo, AppAction.CardHolderActions>(APP_CONSTANTS.initialCardholderInfoState)
.handleAction(CARD.ACTION_GET_CARDHOLDER_INFO, (state, action) => Object.assign({}, state, action.payload) )
.handleAction(CARD.ACTION_LOAD_CARDHOLDER_INFO_SUCCESS, (state, action) => {
  state.isUpdate = true;
  return Object.assign({}, state, action.payload);
} );

export const saveCardholderInfo = createReducer<CardModel.CardholderInfo, AppAction.CardHolderActions>(APP_CONSTANTS.initialCardholderInfoState)
.handleAction(CARD.ACTION_SAVE_CARDHOLDER_INFO, (state, action) => Object.assign({}, state, action.payload) )
.handleAction(CARD.ACTION_SAVE_CARDHOLDER_INFO_SUCCESS, (state, action) => {
  return Object.assign({}, state, action.payload);
} );

export const getCardholderHistory = createReducer<CardModel.ListCardholderHistory, AppAction.CardHolderActions>(APP_CONSTANTS.initialCardholderHistory)
.handleAction(CARD.ACTION_GET_CARDHOLDER_HISTORY, (state, action) => Object.assign({}, state, action.payload) )
.handleAction(CARD.ACTION_LOAD_CARDHOLDER_HISTORY, (state, action) => {
  return Object.assign({}, state, action.payload);
} );

export const getTransHistory = createReducer<ListTransHistory, AppAction.CardHolderActions>(APP_CONSTANTS.initialTransHistory)
.handleAction(CARD.ACTION_LOAD_TRANS, (state, action) => Object.assign({}, state, action.payload) )
.handleAction(CARD.ACTION_LOAD_TRANS_SUCCESS, (state, action) => {
  return Object.assign({}, state, action.payload);
} );

export const getFundings = createReducer<ListFund, AppAction.CardHolderActions>(APP_CONSTANTS.initialTransListFund)
.handleAction(CARD.ACTION_LOAD_FUNDS, (state, action) => Object.assign({}, state, action.payload) )
.handleAction(CARD.ACTION_LOAD_FUNDS_SUCCESS, (state, action) => {
  return Object.assign({}, state, action.payload);
} );