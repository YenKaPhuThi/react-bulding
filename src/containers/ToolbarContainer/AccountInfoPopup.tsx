import React from 'react';

const AccountInfo: React.FC = ({...props}) => {
    return (
        <React.Fragment>
            <div className="block-header">
                <h4>Account Info</h4>
                <a href="#" className="btn-link btn-link-primary btn-link-sm" >View Card History</a>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="form-group-static">
                        <span className="form-control-label">Name on Account</span>
                        <span className="form-control-text">Black Panther</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                        <span className="form-control-label">Username</span>
                        <span className="form-control-text">weggo7329</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static with-sensitive-data">
                        <span className="form-control-label">Account Number</span>
                        <input type="checkbox" />
                        <span className="form-control-text sd-masked">327456 • • • • • • 8362</span>
                        <span className="form-control-text sd-value">3274560000008362</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                        <span className="form-control-label">Upgrade Status</span>
                        <span className="form-control-text">Non-Upgradeable</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                        <span className="form-control-label">Account Reason Code</span>
                        <span className="form-control-text">2418</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                        <span className="form-control-label">Account Status</span>
                        <span className="badge badge-green">Open</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                        <span className="form-control-label">Port Date</span>
                        <span className="form-control-text">02/15/2018</span>
                    </div>
                </div>
            </div>
            <div className="block mt-24">
                <h5>Update Account Status</h5>
                <div className="form-actions form-actions-justified mt-16">
                    <button className="btn btn-secondary" onClick={()=>{}}>Hold</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AccountInfo;