import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { AppState } from '../../store/states';
import { connect } from 'react-redux';
import {ToolBar, Alerts, Comments, FundingHistory, TransactionsHistory, UserInfo} from '../../containers';

interface CardInfoProps extends RouteComponentProps <{
    CardID: string,
  }> {};

const mapStateToProps = (state: AppState) => ({
    cardDetail: state.cardholder.getCardDetail.Data
});
  
const mapDispatchToProps = {};

type CardDetailProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Footer: React.FC = () => {
    return (
        <div className="sk-footer">
            <span className="text-grey-l16">© 2018 First Data Corporation. All rights reserved</span>
            <a href="#" className="ext-link ml-24">Privacy Policy</a>
        </div>
    )
}

const CardInfo: React.FC<CardDetailProps & CardInfoProps> = ({...props}) => {
    const detail = props.cardDetail ?  props.cardDetail[0] : {};
    const funds = props.cardDetail ? props.cardDetail[1] : [];
    const comments = props.cardDetail ? props.cardDetail[2] : [];
    const alerts = props.cardDetail ? props.cardDetail[3] : [];
    const trans = props.cardDetail ? props.cardDetail[4] : [];
    return (
        <div className="d-flex app-content-wrapper">
            <div id="mainContentWrapper" className="main-content-wrapper">
                <div className="section section-bg-light on-top">
                    <Alerts data={alerts} />
                    <UserInfo data={detail} />
                </div>
                <TransactionsHistory data={trans} />
                <FundingHistory data={funds} />
                <Footer />
            </div>
            <ToolBar />
            <Comments data={comments} />
        </div>
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardInfo));