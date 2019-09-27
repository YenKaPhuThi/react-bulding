import React from 'react';
import { CardModel } from '../../models';

interface UserProps{
    data?: CardModel.CardInfo,
}

const UserInfo: React.FC<UserProps> = ({...props}) => {
    return (
        <React.Fragment>
            <div className="section-header mt-24 mb-8">
                <h3 className="section-title"><span className="text-mdash">Black Panther</span><span className="icon-lock text-grey-l16 ml-8"></span></h3>
                <a href="#" className="btn-link btn-link-primary">Unlock Web Account</a>
                <a href="#" className="btn-link btn-link-primary">Edit Cardholder Info</a>
            </div>
            <div className="row">
                <div className="col-3">
                    <div className="form-group-static">
                        <span className="form-control-label">Organization</span>
                        <span className="form-control-text">Money Network 17</span>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group-static">
                        <span className="form-control-label">Program Number</span>
                        <span className="form-control-text">11011</span>
                    </div>
                </div>
                <div className="col-6">
                <div className="form-group-static">
                    <span className="form-control-label">Program Name</span>
                    <a href="#" className="ext-link">ADP Harper College Student</a>
                </div>
                </div>
                <div className="col-3">
                    <div className="form-group-static">
                        <span className="form-control-label">Username</span>
                        <span className="form-control-text">weggo7329</span>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group-static">
                        <span className="form-control-label">Last 4 SSN</span>
                        <span className="form-control-text">0832</span>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group-static with-sensitive-data">
                        <span className="form-control-label">Account Number</span>
                        <input type="checkbox" />
                        <span className="form-control-text sd-masked">327420 • • • • • • 8362</span>
                        <span className="form-control-text sd-value">327420000008362</span>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group-static">
                        <span className="form-control-label">Account Status</span>
                        <span className="badge badge-green">Open</span>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group-static">
                        <span className="form-control-label">Total Balance</span>
                        <span className="form-control-text">$1,280.91</span>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group-static">
                        <span className="form-control-label">Open to buy balance</span>
                        <span className="form-control-text">$1,280.91</span>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group-static with-sensitive-data">
                        <span className="form-control-label">Card number</span>
                        <input type="checkbox" />
                        <span className="form-control-text sd-masked">4240 • • • • • • • • 1920</span>
                        <span className="form-control-text sd-value">4240000000001920</span>
                    </div>
                    </div>
                <div className="col-3">
                    <div className="form-group-static">
                        <span className="form-control-label">Card Status</span>
                        <span className="badge badge-purple">Pre-Active</span>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group-static">
                        <span className="form-control-label">Issue Date</span>
                        <span className="form-control-text">05/16/2018</span>
                    </div>
                    </div>
                <div className="col-3">
                    <div className="form-group-static">
                        <span className="form-control-label">Shipping Method</span>
                        <span className="form-control-text">Regular</span>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group-static">
                        <span className="form-control-label">Expected delivery date</span>
                        <span className="form-control-text">05/26/2018</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

UserInfo.displayName = 'UserInfo';
export default UserInfo;