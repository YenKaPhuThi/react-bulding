import React, { useState, useEffect, useReducer, FormEvent } from 'react';
import { Dialog } from '@progress/kendo-react-dialogs';
import { connect } from 'react-redux';
import cn from 'classnames';
import { TextboxInput, Checkbox, Verification } from '../../components';
import { APP_CONSTANTS } from '../../constants';
import {CardInfoProps, CardProps, CardholderState, CardHolderAction, mapStateToProps, mapDispatchToProps} from './constants';
import {ValidatorHelper} from '../../helpers';
import * as _ from 'lodash';
import { MagicKeyValue } from '../../constants/constants';
import { errors } from '@telerik/kendo-intl';

interface validationModel {
    [key: string] : {
        isValid: boolean,
        errorMsg: string,
    }
}

const CardHolderInfo: React.FC<CardInfoProps & CardProps> = ({...props}) => {
    
    const reducer = (state: CardholderState, action: CardHolderAction): CardholderState => {
        switch (action.type){
            case 'CHANGE':
                return action.result;
            case 'UPDATE':
                return action.result;
            case 'RESET':
                return action.result;
            default: 
                throw new Error();
        }
    }

    const [toogleDialog, setToogleDialog] = useState(false);
    const [formValidate, setFormValidate] = useState<validationModel[]>(
        [{
            'FirstName': {
                isValid: true,
                errorMsg: '',
            }
        }]
    );
    const [isVerifyFirstAddress, setVerifyFirstAddress] = useState(false);
    const [isVerifySecondAddress, setVerifySecondAddress] = useState(false);
    const [isSameShippingAddress, setSameShippingAddress] = useState(props.cardHodler.SameAsBillingAddress);
    const [cardInfo, setCardInfo] = useReducer(reducer, props.cardHodler);

    useEffect(() => {
        setToogleDialog(props.triggerOpen);
        setCardInfo({type: 'UPDATE', result: props.cardHodler});
        return () => {
            setCardInfo({type: 'RESET', result: APP_CONSTANTS.initialCardholderInfoState});
        }
    },[props.triggerOpen, props.cardHodler]);

    const handleToogleDialog = (): void => {
        setToogleDialog(!toogleDialog);
        props.onCloseCardInfo();
    }

    const handleChangeInput = (event: FormEvent<HTMLInputElement>, typeValidate?: string) => {
        const {name, value, type, checked} = event.currentTarget;
        if(type === 'checkbox'){
            setCardInfo({type: 'CHANGE', result: {...cardInfo, [name]: checked}});
            setSameShippingAddress(checked);
        }else{
            setCardInfo({type: 'CHANGE', result: {...cardInfo, [name]: value}});
        }

        if(name.length && typeValidate){
            handleError(name, typeValidate);
        }
    }

    const handleError = (name: string, type?: string) => {
        let validateField = false;
        if(type){
            const value = getFieldValueByName(name);
            validateField = ValidatorHelper.validate(type,value);
            let key = '', temp;
            const listValidateFields = _.reduce(formValidate, (arrItem :Array<validationModel>, item) => {
                key = _.keysIn(item)[0];
                if(key === name){
                    item[key] =  {isValid: validateField, errorMsg: ''};
                }else{
                    arrItem.push({[name]: {isValid: validateField, errorMsg: ''}});
                }
                arrItem.push(item);

                return arrItem;
            }, []);

            setFormValidate(listValidateFields);
            console.log(formValidate);
        }

        return validateField;
    }

    const getLabelChildren = (label: string, isRequired: boolean = true) => {
        return (
            <React.Fragment>
                {label}
                {isRequired && <span className="required"></span>}
            </React.Fragment>
        )
    }

    const handleVerifyEvent = (e: FormEvent<HTMLButtonElement>, callback: Function) => {
        e.preventDefault();
        setTimeout(()=> {
            callback(true);
        },2000)
    }

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const listEl = event.currentTarget.elements;
        const formValid = ValidatorHelper.validateAll(listEl, handleError);
        if(formValid){
            props.saveCardInfo(cardInfo);
            handleToogleDialog();
        }
    }

    const getFieldValueByName = (name: string) =>{
        const card = cardInfo as MagicKeyValue;
        return card[name];
    }

    const isValidField = (name: string) => {
        const formGroup = _.find(formValidate, name);
        let valid = true;
        if(formGroup){
            return formGroup[name].isValid;
        }
        return valid;
    }

    return (
        <React.Fragment>
            {toogleDialog &&  <Dialog title="Edit Cardholder Info" onClose={handleToogleDialog} className={"window-lg"} width={'66%'}>
                <form className={cn({
                    'loading' : !cardInfo.isUpdate
                })} onSubmit={handleFormSubmit}>
                    <div className="window-content-body">
                        <h5>Personal Info</h5>
                        <div className="row">
                            <div className="col-4">
                                <TextboxInput className={cn(
                                    {
                                        'error' : !isValidField('FirstName')
                                    }
                                )} hasLabel={true} labelValue={getLabelChildren('First Name')} name="FirstName" onChange={handleChangeInput} data={cardInfo.FirstName} validationMessage="First name is required" typeValidate="required"/>
                            </div>
                            <div className="col-4">
                                <TextboxInput hasLabel={true} labelValue={getLabelChildren('Last Name')} name="LastName" onChange={handleChangeInput} data={cardInfo.LastName} validationMessage="" typeValidate="required"/>
                            </div>
                            <div className="col-4">
                                <TextboxInput hasLabel={true} labelValue={getLabelChildren('Date Of Birth', false)} name="DateOfBirth" onChange={handleChangeInput} data={cardInfo.DateOfBirth} />
                            </div>
                            <div className="col-4">
                                <TextboxInput hasLabel={true} labelValue={getLabelChildren('Last 4 SSN', false)} name="Last4SSN" onChange={handleChangeInput} data={cardInfo.Last4SSN} />
                            </div>
                            <div className="col-4">
                                <TextboxInput hasLabel={true} labelValue={getLabelChildren('Email')} name="Email" onChange={handleChangeInput} data={cardInfo.Email} />
                            </div>
                            <div className="col-4">
                                <TextboxInput hasLabel={true} labelValue={getLabelChildren('Confirm Email')} name="ConfirmEmail" onChange={handleChangeInput} data={cardInfo.ConfirmEmail} />
                            </div>
                            <div className="col-4">
                                <TextboxInput hasLabel={true} labelValue={getLabelChildren('Home Number')} name="HomeNumber" onChange={handleChangeInput} data={cardInfo.HomeNumber} />
                            </div>
                            <div className="col-4">
                                <TextboxInput hasLabel={true} labelValue={getLabelChildren('Work Number', false)} name="WorkNumber" onChange={handleChangeInput} data={cardInfo.WorkNumber} />
                            </div>
                            <div className="col-4">
                                <TextboxInput hasLabel={true} labelValue={getLabelChildren('Mobile Number', false)} name="MobileNumber" onChange={handleChangeInput} data={cardInfo.MobileNumber} />
                            </div>
                        </div>
                        <h5 className="mt-24">Billing Address</h5>
                        <div className="row">
                            <div className="col-4">
                                <TextboxInput hasLabel={true} labelValue={getLabelChildren('Billing Street 1')} name="BillingAddress1" onChange={handleChangeInput} data={cardInfo.BillingAddress1} />
                            </div>
                            <div className="col-4">
                                <TextboxInput hasLabel={true} labelValue={getLabelChildren('Billing Street 2', false)} name="BillingAddress2" onChange={handleChangeInput} data={cardInfo.BillingAddress2} />
                            </div>
                            <div className="col-4">
                                <TextboxInput hasLabel={true} labelValue={getLabelChildren('Billing City')} name="BillingCity" onChange={handleChangeInput} data={cardInfo.BillingCity} />
                            </div>
                            <div className="col-4">
                                <TextboxInput hasLabel={true} labelValue={getLabelChildren('Billing State', false)} name="BillingState" onChange={handleChangeInput} data={cardInfo.BillingState} />
                            </div>
                            <div className="col-4">
                                <TextboxInput hasLabel={true} labelValue={getLabelChildren('Billing ZIP', false)} name="BillingZip" onChange={handleChangeInput} data={cardInfo.BillingZip} />
                            </div>
                            <div className="col-4">
                                <Verification verifyName="Address" onPressVerify={(e) => {
                                    handleVerifyEvent(e, setVerifyFirstAddress);
                                }} isVerified={isVerifyFirstAddress}/>
                            </div>
                        </div>
                        <h5 className="mt-24">Shipping Address</h5>
                        <Checkbox labelGroupClass="mt-16" id="shippingAddressCheckbox" name="SameAsBillingAddress" onPressCheck={handleChangeInput} labelName="Same as Billing Address" isIndeterminate={true} />
                        {isSameShippingAddress && <div id="shippingAddressBlock">
                            <div className="row">
                                <div className="col-4">
                                    <TextboxInput hasLabel={true} labelValue={getLabelChildren('Shipping Street 1')} name="ShippingAddress1" onChange={handleChangeInput} data={cardInfo.ShippingAddress1} />
                                </div>
                                <div className="col-4">
                                    <TextboxInput hasLabel={true} labelValue={getLabelChildren('Shipping Street 2', false)} name="ShippingAddress2" onChange={handleChangeInput} data={cardInfo.ShippingAddress2} />
                                </div>
                                <div className="col-4">
                                    <TextboxInput hasLabel={true} labelValue={getLabelChildren('Shipping City')} name="ShippingCity" onChange={handleChangeInput} data={cardInfo.ShippingCity} />
                                </div>
                                <div className="col-4">
                                    <TextboxInput hasLabel={true} labelValue={getLabelChildren('Shipping State')} name="ShippingState" onChange={handleChangeInput} data={cardInfo.ShippingState} />
                                </div>
                                <div className="col-4">
                                    <TextboxInput hasLabel={true} labelValue={getLabelChildren('Shipping ZIP')} name="ShippingZip" onChange={handleChangeInput} data={cardInfo.ShippingZip} />
                                </div>
                                <div className="col-4">
                                    <Verification verifyName="Address" onPressVerify={(e) => {
                                    handleVerifyEvent(e, setVerifySecondAddress);
                                }} isVerified={isVerifySecondAddress}/>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="window-content-actions">
                        <button className="btn btn-secondary" onClick={handleToogleDialog}>Cancel</button>
                        <button className="btn btn-primary" type="submit">Save</button>
                    </div>
                </form>
            </Dialog>}
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHolderInfo);