import { CardModel } from "../../models";

export const ACTION_FETCH_FAILED = 'FETCH_FAILED';

export const initialSearchCardsState = {
    Data : [],
    Total: 0,
    AggregateResults: null,
    Errors: null,
    isSearchCard: false,
} as CardModel.SearchCardholders;

export const initialCardDetailState = {Data: []};