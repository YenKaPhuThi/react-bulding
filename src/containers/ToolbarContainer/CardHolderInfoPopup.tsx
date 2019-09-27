import React, { FormEvent, useState, useEffect } from 'react';
import {CardHolderInfo} from '../index';
import {PortalWrapper} from '../../components';
import { cardHolderActions } from '../../store/actions';
import { connect } from 'react-redux';
import ChangeHistoryCardholder from '../ChangeHistoryCardholder';

const mapStateToProps = () => ({
    
});

const mapDispatchToProps = {
    getCardholderInfo: cardHolderActions.getCardholderInfo
};

type CardHolder = ReturnType< typeof mapStateToProps> & typeof mapDispatchToProps;

const CardHolderInfoPopup: React.FC<CardHolder> = ({...props}) => {

    const [showEditInfo, setShowEditInfo] = useState(false);
    const [showCardHistory, setShowCardHistory] = useState(false);
    const handleEditEvent = (event: FormEvent<HTMLButtonElement>): void => {
        setShowEditInfo(!showEditInfo);
        props.getCardholderInfo({});
    }

    const handleEditCardInfo = () => {
        setShowEditInfo(false);
    }

    const handleCardholderHistory = () => {
        setShowCardHistory(!showCardHistory);
    }

    return (
        <React.Fragment>
            <div className="block-header">
                <h4>Cardholder Info</h4>
                <button onClick={handleEditEvent} className="btn-link btn-link-primary btn-link-sm">Edit</button>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">First Name</span>
                    <span className="form-control-text">Black</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Last Name</span>
                    <span className="form-control-text">Panther</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Date of birth</span>
                    <span className="form-control-text">04/03/1978</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Last 4 SSN</span>
                    <span className="form-control-text">0832</span>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group-static">
                    <span className="form-control-label">Email</span>
                    <span className="form-control-text text-ellipsis" title="black.panther@wakanda.org">black.panther@wakanda.org</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Home Number</span>
                    <span className="form-control-text">(972) 432-2344</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Work Number</span>
                    <span className="form-control-text"></span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Mobile Number</span>
                    <span className="form-control-text">(469) 312-9951</span>
                    </div>
                </div>
                <div className="col-6"></div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Billing Address</span>
                    <span className="form-control-text">2900 Southwestern Blvd.<br/>Dallas, TX 75225</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group-static">
                    <span className="form-control-label">Shipping Address</span>
                    <span className="form-control-text">2900 Southwestern Blvd.<br/>Dallas, TX 75225</span>
                    </div>
                </div>
                </div>
            <p className="text-sm mt-24">
                <button onClick={handleCardholderHistory} className="btn-link btn-link-primary btn-link-sm mli-8">View changes</button>
            </p>
            {showEditInfo && <PortalWrapper><CardHolderInfo triggerOpen={showEditInfo} onCloseCardInfo={handleEditCardInfo}/></PortalWrapper>}
            {showCardHistory && <PortalWrapper><ChangeHistoryCardholder triggerOpen={showCardHistory} onCloseCardInfo={handleCardholderHistory}/></PortalWrapper>}
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHolderInfoPopup);