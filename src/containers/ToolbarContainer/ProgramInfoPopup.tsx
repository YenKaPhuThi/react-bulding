import React from 'react';

const ProgramInfoPopup: React.FC = ({...props}) => {
    return (
        <React.Fragment>
            <div className="block-header">
                <h4>Program Info</h4>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Organization</span>
                    <span className="form-control-text">Money Network 17</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Program number</span>
                    <span className="form-control-text">11011 SC 2707</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Program name</span>
                    <a href="#" className="ext-link">ADP Harper College Student</a>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Issuer Org Name & Number</span>
                    <span className="form-control-text">efs17</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Product Type</span>
                    <span className="form-control-text">GOVERNMENT</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Program Type</span>
                    <span className="form-control-text">TREASURY AGENCY</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Program Type</span>
                    <span className="form-control-text">First Data Direct</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Source or target</span>
                    <span className="form-control-text">Source</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Direct Deposit Routing #</span>
                    <span className="form-control-text">875764098</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProgramInfoPopup;