export interface Transaction{
    TransactionId: number,
    TransactionDate: string,
    PostDate: string,
    Transactiondesc: string,
    TransactionAmount: number,
    Balance: number,
    DisputeStatus: string,
    TransactionStatus: string,
    MccCode: string,
    StatusPills: string,
    AuthToleranceAmt: number,
    AuthTolerancePercent: any,
    AuthToleranceStatus: string,
    FundingStatus: string,
}

export interface ListTransHistory {
    Data : Array<Transaction>,
    AggregateResults: any,
    Errors: any,
    Total: number,
}