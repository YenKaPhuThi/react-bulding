import { APP_CONSTANTS } from '../../constants';

export type StateHeader = {
    userInput: Object;
}

export type ActionHeader = | {type: 'focus', result: {}, class: ''};

export type SearchState = {
    searchInput: APP_CONSTANTS.SEARCH_PAYLOAD
}

export interface Header{
    onSearch: (data: any) =>  void,
}

export const initialSearch: APP_CONSTANTS.SEARCH_PAYLOAD  = {
    sort: null,
    page: 1,
    pageSize: 10,
    group: null,
    filter: null,
    keySearch: '',
}

//interface initialSearchs

export type SearchAction = | {type: 'CHANGE', result: APP_CONSTANTS.SEARCH_PAYLOAD} | { type: 'RESET', result: APP_CONSTANTS.SEARCH_PAYLOAD};
