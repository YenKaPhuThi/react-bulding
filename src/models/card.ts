export interface Card{
    FullName?: string,
    ProgramName?: string,
    CardNumber?: string,
    CardNumberMasked?: string,
    CardCreatedDate?: string,
    Email?: string,
    Address?: string,
    Last4ssn?: string,
    AccountId?: number,
    PersonId?: number,
    ProgramId?: number,
    Url?: string,
    KeyWordPopup?: string,
    SearchCategory?: number,
    AccountIdEncrypted?: string,
    PersonIdEncrypted?: string,
    ProgramIdEncrypted?: string,
    RevealUrl?: string,
    IsAccessCardHolderInfor?: boolean,
}

export interface SearchCardholders{
    Data: Card[],
    Total: number,
    AggregateResults: any,
    Errors: any,
    isSearchCard: boolean,
}
export interface CardDetail{
    Data: Array<any>,
}

export interface CardInfo{
    CardId: number,
    CardName: string,
    CardNumber: string,
    CardReasonCode: string,
    CardReasonCodeId: 0,
    AccountReasonCode: string,
    ActionDate: Date,
    IssueDate: Date,
    TerminationDate: Date,
    ExpiryDate: Date,
    AccountStatus: string,
    CardStatus: string,
    CardPinReset: string,
    ShippingAddrOne: string,
    ShippingAddrTwo: string,
    ShippingCity: string,
    ShippingState: string,
    ShippingZip: string,
    ShippingMethod: string
}

export interface CardholderInfo{
    FirstName: string,
    LastName: string,
    DateOfBirth: string,
    Last4SSN: string,
    Email: string,
    ConfirmEmail: string,
    HomeNumber: string,
    WorkNumber: string,
    MobileNumber: string,
    BillingAddress1: string,
    BillingAddress2: string,
    BillingCity: string,
    BillingState: string,
    BillingZip: string,
    ShippingAddress1: string,
    ShippingAddress2: string,
    ShippingCity: string,
    ShippingState: string,
    ShippingZip: string,
    SameAsBillingAddress: boolean,
    isUpdate: boolean,
}

export interface  CardholderHistory{
    ChangeType?: string,
    ChangedValue?: string,
    CipFlag?: string,
    Method?: string,
    UpdateDate?: string,
    UpdatedPersonId?: number,
    UpdatedUserName?: string,
}
export interface ListCardholderHistory{
    Data: Array<CardholderHistory>,
    AggregateResults: any,
    Errors: any,
    Total: number,
}