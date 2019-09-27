import { FormEvent } from "react";

export interface VerifyModel {
    verifyName: string,
    isVerified: boolean,
    onPressVerify: (e: FormEvent<HTMLButtonElement>) => void;
}