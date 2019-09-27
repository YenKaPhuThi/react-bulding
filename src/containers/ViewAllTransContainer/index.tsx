import React from 'react';
import { Grid, GridColumn as Column}  from '@progress/kendo-react-grid';
import { connect } from 'react-redux';
import { AppState } from '../../store/states';

const mapStateToProps = (state: AppState) => ({
    trans: state.cardholder.getTransHistory
});

const mapDispatchToProps = {
};

type ViewTransProps = ReturnType< typeof mapStateToProps> & typeof mapDispatchToProps;

const ViewAllTrans: React.FC<ViewTransProps> = ({...props}) => {
    return (
        <div className="main-content-wrapper">
            <div className="section section-bg-light on-top">
                <h4>Black Panther</h4>
                <div className="row">
                <div className="col-2">
                    <div className="form-group-static">
                    <span className="form-control-label">Organization</span>
                    <span className="form-control-text">Money Network 17</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="form-group-static">
                    <span className="form-control-label">Program Number</span>
                    <span className="form-control-text">11011</span>
                    </div>
                </div>
                <div className="col-3 text-center ">
                    <div className="form-group-static d-inline-block text-left">
                    <span className="form-control-label">Program Name</span>
                    <a href="#" className="ext-link">ADP Harper College Student</a>
                    </div>
                </div>
                <div className="col-3 text-center">
                    <div className="form-group-static with-sensitive-data text-left">
                    <span className="form-control-label">Card Number</span>
                    <input type="checkbox" />
                    <span className="form-control-text sd-masked">4240 • • • • • • • • 1920</span>
                    <span className="form-control-text sd-value">4240000000001920</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="form-group-static with-sensitive-data">
                    <span className="form-control-label">Account Number</span>
                    <input type="checkbox" />
                    <span className="form-control-text sd-masked">3274 • • • • • • • • 8362</span>
                    <span className="form-control-text sd-value">3274000000008362</span>
                    </div>
                </div>
                </div>
            </div>
            <h4 className="mt-24">All Transaction List</h4>
            <div className="grid-container mt-16">
                <Grid 
                    data={props.trans.Data}
                    sortable
                    reorderable
                    expandField="expanded"
                    className="text-left"
                    >
                    <Column field="TransactionDate" title="TRANS DATE"/>        
                    <Column field="PostDate" title="POST DATE"/>
                    <Column field="Transactiondesc" title="DESCRIPTION"/>
                    <Column field="TransactionAmount" title="AMOUNT"/>
                    <Column field="Balance" title="BACANCE"/>
                    <Column field="TransactionStatus" title="STATUS"/>
                </Grid>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllTrans);