import React, { useState, useEffect } from 'react';
import { Grid, GridColumn as Column}  from '@progress/kendo-react-grid';
import { Fund } from '../../models';
import { cardHolderActions } from '../../store/actions';
import { AppState } from '../../store/states';
import { connect } from 'react-redux';
import { WindowPortal } from '../../components';
import ViewAllFunding from '../ViewAllFunding';
import _ from 'lodash';
interface FundingProps {
    data: Fund[],
}

const mapStateToProps = (state: AppState) => ({
    funds: state.cardholder.getFundings
});

const mapDispatchToProps = {
    getFunds: cardHolderActions.getFunds
};

type FundingModel = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const FundingHistory: React.FC<FundingProps & FundingModel> = ({...props}) => {

    const [isViewChange, setIsViewChange] = useState(false);

    const handleViewAllTrans = () => {
        props.getFunds({});
    }

    useEffect(() => {
        if(props.funds.Data.length){
            if(!isViewChange){
                handleOpenWindow(!isViewChange);
            }
        }
        return () => {
            handleOpenWindow(false);
        }
    }, [props.funds])

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
                <h4>Funding History</h4>
                <div className="row align-items-center mt-16">
                    <div className="col-auto">
                        <strong>Last 5 Funding</strong>
                    </div>
                    <div className="col"></div>
                    <div className="col-auto">
                        <button className="ext-link" onClick={handleViewAllTrans}>View all Funding</button>
                    </div>
                </div>
                <div className="grid-container mt-16">
                    <Grid 
                        data={props.funds.Data}
                        sortable
                        reorderable
                        expandField="expanded"
                        className="text-left"
                        >
                        <Column field="ReceiptDate" title="RECEIPT DATE"/>        
                        <Column field="ApplyDate" title="APPLY DATE"/>
                        <Column field="FundDescription" title="DESCRIPTION"/>
                        <Column field="AmountCredited" title="AMOUNT CREDITED"/>
                        <Column field="AmountCharged" title="AMOUNT CHARGED"/>
                        <Column field="PaymentMethod" title="STATUS"/>
                    </Grid>
                </div>
            </div>
            { isViewChange && <WindowPortal closeWindowPortal={handleOpenWindow} open={isViewChange}>
                <ViewAllFunding />
            </WindowPortal>}
        </React.Fragment>
    )
}

FundingHistory.displayName = 'FundingHistory';

export default connect(mapStateToProps, mapDispatchToProps)(FundingHistory);