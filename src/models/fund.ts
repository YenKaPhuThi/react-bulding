export interface Fund {
    ReceiptDate: string,
    ApplyDate: string,
    FundDescription: string,
    AmountCredited: string,
    AmountCharged: string,
    PaymentMethod: string,
}

export interface ListFund {
    Data : Array<Fund>,
    AggregateResults: any,
    Errors: any,
    Total: number,
}