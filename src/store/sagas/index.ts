import { all, takeLatest } from 'redux-saga/effects';
import { searchCardsSaga, loadCardDetail, loadCardholderInfo, saveCardholderInfo, loadCardholderHistory, getFunds, getTrans} from "./Cardholder";
import { CARD, AUTH } from '../definitions';
import { login, logout } from './Auth/authSaga';

function* rootSaga(){
    yield all([
        takeLatest(CARD.ACTION_SEARCH_CARD, searchCardsSaga),
        takeLatest(AUTH.ACTION_LOG_IN, login),
        takeLatest(AUTH.ACTION_LOG_OUT, logout),
        takeLatest(CARD.ACTION_LOAD_CARD_DETAIL, loadCardDetail),
        takeLatest(CARD.ACTION_GET_CARDHOLDER_INFO, loadCardholderInfo),
        takeLatest(CARD.ACTION_SAVE_CARDHOLDER_INFO, saveCardholderInfo),
        takeLatest(CARD.ACTION_GET_CARDHOLDER_HISTORY, loadCardholderHistory),
        takeLatest(CARD.ACTION_LOAD_FUNDS, getFunds),
        takeLatest(CARD.ACTION_LOAD_TRANS, getTrans),
    ]);
}

export default rootSaga;