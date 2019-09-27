import { CardModel, ListTransHistory, ListFund } from "../models";

export interface MagicKeyValue {
    [key: string] : any,
};

export const routerBodyClassName : MagicKeyValue = {
    'login' : 'sk-login-body',
    'default': '',
};

export const resourceLabel : MagicKeyValue = {
    Search_Label_SSN : {
        label: 'Social Security Number',
        format: 'Without hyphens or spaces',
        ex: '',
    },
    Search_Label_MobilePhone : {
        label: 'Mobile Phone',
        format: 'Without hyphens or spaces',
        ex: '',
    },
    Search_Label_AccountNumber: {
        label: 'Account Number',
        format: 'Without hyphens or spaces',
        ex: '',
    },
    Search_Label_HomePhone: {
        label: 'Home Phone',
        format: 'Without hyphens or spaces',
        ex: '',
    },
    Search_Label_CardNumber: {
        label: 'Card Number',
        format: 'Without hyphens or spaces',
        ex: '',
    },
    Search_Label_EmailAddress: {
        label: 'Email Address',
        format: 'Format as email@example.com',
        ex: '',
    },
    Search_Label_FirstLastName: {
        label: 'First Name and Last Name',
        format: 'Format as "First Name: Last Name"',
        ex: '(Oscar: De La Hoya)',
    },
    Search_Label_FirstLastNameZipCode: {
        label: 'First Name, Last Name and optional Zip Code',
        format: 'Format as "First Name: Last Name Zip Code"',
        ex: '(Oscar: De La Hoya 55000)',
    },
    Search_Label_FirstLastNameDOB: {
        label: 'First Name, Last Name and optional Date of Birth',
        format: 'Format as "First Name: Last Name Date of Birth"',
        ex: '(Oscar: De La Hoya 01/01/1980)',
    },
};

export const SortBy = [
    { text: "Cardholder Name", value: 0 },
    { text: "Program Name", value: 1 },
    { text: "Card Number", value: 2 },
    { text: "Created Date", value: 3 },
    { text: "Email", value: 4 },
    { text: "Address", value: 5 },
    { text: "Last 4 SSN", value: 6 }
];

export const OrderBy = {
    desc: 0,
    asc: 1,
};

export type SEARCH_PAYLOAD = {
    sort: any,
    page: number,
    pageSize: number,
    group: any,
    filter: any,
    keySearch: string,
};

export type GET_FUNDS_PAYLOAD = {};
export type GET_COMMENT_CATEGORIES_PAYLOAD = {};
export type GET_ALERT_PAYLOAD = {};
export type GET_TRANS_PAYLOAD = {};


export const initFakeLogin = {
    name: 'Harry',
    email: 'h@h.com',
    token: 'jkisa129dassd23asd4i32ds92w12sd12',
    refeshToken: 'jkisa129dassd23asd4i32ds92w12sd12',
    isLogin: false,
};

export const initialCardholderInfoState = {
    FirstName: "",
    LastName: "",
    DateOfBirth: "",
    Last4SSN: "",
    Email: "",
    ConfirmEmail: "",
    HomeNumber: "",
    WorkNumber: "",
    MobileNumber: "",
    BillingAddress1: "",
    BillingAddress2: "",
    BillingCity: "",
    BillingState: "",
    BillingZip: "",
    ShippingAddress1: "",
    ShippingAddress2: "",
    ShippingCity: "",
    ShippingState: "",
    ShippingZip: "",
    SameAsBillingAddress: false
} as CardModel.CardholderInfo;

export const initialCardholderHistory = {
    Data : [],
    Total: 0,
    AggregateResults: null,
    Errors: null,
} as CardModel.ListCardholderHistory;

export const initialTransHistory = {
    Data : [],
    Total: 0,
    AggregateResults: null,
    Errors: null,
} as ListTransHistory;

export const initialTransListFund = {
    Data : [],
    Total: 0,
    AggregateResults: null,
    Errors: null,
} as ListFund;

export type LOAD_CARDS_DATA =  SEARCH_PAYLOAD & { searchNodata: boolean };
export type LOAD_FUNDS_DATA =  {};
export type LOAD_ALERTS_DATA =  {};
export type LOAD_COMMENT_CATEGORIES_DATA = {};
export type LOAD_TRANS_DATA = {};
export type LOAD_DETAIL_DATA = [];

export type GET_CARDHOLDER_INFO = {};
export type LOAD_CARDHOLDER_INFO = {};

export type SAVE_CARD_INFO = {};


export type GET_CARD_HISTORY = {};
export type LOAD_CARD_HISTORY = {};
