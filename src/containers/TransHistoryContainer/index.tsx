import React, {useState, useEffect} from 'react';
import { Grid, GridColumn as Column}  from '@progress/kendo-react-grid';
import { Transaction } from '../../models';
import { AppState } from '../../store/states';
import { cardHolderActions } from '../../store/actions';
import { connect } from 'react-redux';
import ViewAllTrans from '../ViewAllTransContainer';
import { WindowPortal } from '../../components';
import { withRouter, RouteComponentProps } from 'react-router';
import _ from 'lodash';
interface TransModel {
    data?: Transaction[],
}

const mapStateToProps = (state: AppState) => ({
    trans: state.cardholder.getTransHistory
});

const mapDispatchToProps = {
    getAllTrans: cardHolderActions.getTrans
};

type TransProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const TransactionsHistory: React.FC<TransModel & TransProps & RouteComponentProps<{}>> = ({...props}) => {

    const [isViewChange, setIsViewChange] = useState(false);

    const handleViewAllTrans = () => {
        props.getAllTrans({});
    }

    useEffect(() => {
        if(props.trans.Data.length){
            if(!isViewChange){
                handleOpenWindow(!isViewChange);
            }
        }

        return () => {
            handleOpenWindow(false);
        }
    }, [props.trans])

    const handleOpenWindow = (isOpen?: boolean) => {
        if(_.isBoolean(isOpen)){
            setIsViewChange(isOpen);
        }else{
            setIsViewChange(!isViewChange);
        }
    }

    return (
        <React.Fragment>
            <div className="section">
                <h4>Transactions</h4>
                <div className="row align-items-center mt-16">
                    <div className="col-auto">
                        <strong>Last 5 Transactions</strong>
                    </div>
                    <div className="col-auto">
                        <strong>Dispute Cases: </strong>
                        <span>2</span>
                    </div>
                    <div className="col"></div>
                    <div className="col-auto">
                        <button className="ext-link" onClick={handleViewAllTrans}>View all Transactions</button>
                    </div>
                </div>
                <div className="grid-container mt-16">
                    <Grid 
                        data={props.data}
                        sortable
                        reorderable
                        expandField="expanded"
                        className="text-left"
                        >
                        <Column field="TransactionDate" title="TRANS DATE"/>        
                        <Column field="Transactiondesc" title="DESCRIPTIONS"/>
                        <Column field="TransactionAmount" title="TRANS AMT"/>
                        <Column field="Balance" title="BALANCE"/>
                        <Column field="TransactionStatus" title="STATUS"/>
                        <Column field="" title="MORE INFO" />
                        <Column field="" title="ACTIONS"/>
                    </Grid>
                </div>
            </div>
            <WindowPortal closeWindowPortal={handleOpenWindow} open={isViewChange}>
                <ViewAllTrans />
            </WindowPortal>
        </React.Fragment>
    )
}

TransactionsHistory.displayName = 'TransactionsHistory';

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionsHistory));