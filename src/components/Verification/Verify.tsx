import React, { FormEvent, useState, useEffect } from 'react';
import {VerifyModel} from './constants';
import './verify.scss';
import cn from 'classnames';

const Verification: React.FC<VerifyModel> = ({...props}) => {

    const [verifying, setVerifying] = useState(false);
    const [verified, setVerified] = useState(false);

    const handleVerifyEvent = (e: FormEvent<HTMLButtonElement>) => {
        if(!verifying){
            setVerifying(!verifying);
        }
        props.onPressVerify(e);
    }

    useEffect(() => {
        setVerified(props.isVerified);
        if(props.isVerified){
            setVerifying(false);
        }
    }, [props.isVerified])

    return (
        <React.Fragment>
            <button className={cn("btn-link btn-link-primary mli-8 mt-20", {
                'hide': verifying || props.isVerified
            })} onClick={handleVerifyEvent}>Verify {props.verifyName}</button>
            <div className={cn({
                'hide': !verifying
            })}>
                <div className="d-inline-flex align-items-center mt-28">
                <span className="loading-icon size-sm"></span>
                <span className="text-grey ml-4 dot-flicker">Verifying<span>.</span><span>.</span><span>.</span></span>
                </div>
            </div>
            <div className={cn({
                'hide': !props.isVerified
            })}>
                <div className="d-inline-flex align-items-center mt-28">
                <span className="icon-done mr-4 text-green s-20"></span>
                <span className="text-green">{props.verifyName} verified</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Verification;