import React from 'react';

const CardInfoPopup: React.FC = ({...props}) => {
    return (
        <React.Fragment>
            <div className="block-header">
            <h4>Card Info</h4>
            </div>
            <div className="row mt-16">
                <div className="col-12">
                    <div className="form-group topless form-k-input-reset">
                    <span className="form-control-label">Select Card</span>
                    <input id="selectCard" type="text" data-role="dropdownlist" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Cardname</span>
                    <span className="form-control-text">Black Panther</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Card Reason Code</span>
                    <span className="form-control-text">Default</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Action Date</span>
                    <span className="form-control-text">07/06/2018</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Issue Date</span>
                    <span className="form-control-text">05/16/2018</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Terminal Date</span>
                    <span className="form-control-text"></span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Expiration Date</span>
                    <span className="form-control-text">11/30/2018</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Shipping Address</span>
                    <span className="form-control-text">1407 Graymalkin Lane, NY, 10560</span>
                    </div>
                </div>
            </div>
            <div className="block mt-24">
                <h5>Update Card Status</h5>
                <div className="form-actions form-actions-justified mt-16">
                    <button className="btn btn-secondary" onClick={() => {}}>Hold</button>
                    <button className="btn btn-secondary" onClick={() => {}}>Reissue Card</button>
                </div>
                <div className="form-actions form-actions-justified mt-16">
                    <button className="btn btn-secondary" onClick={() => {}}>Force PIN Change</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardInfoPopup;