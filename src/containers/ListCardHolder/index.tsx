import React, {useState} from 'react';
import {connect} from 'react-redux';
import { AppState } from '../../store/states';
import { APP_ROUTERS } from '../../constants';
import { RouteComponentProps, withRouter } from 'react-router';
import { cardHolderActions } from '../../store/actions';
import {DropdownWrapper} from '../../components';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { SortBy } from '../../constants/constants';
import cn from 'classnames';

const mapStateToProps = (state: AppState) => ({
    cards: state.cardholder.searchCardReducer.Data,
    cardDetail: state.cardholder.getCardDetail
});

const mapDispatchToProps = {
    getCardDetail: cardHolderActions.getCardDetail
};

type CardListProps = ReturnType<typeof mapStateToProps > & typeof mapDispatchToProps;

const CardList: React.FC<CardListProps & RouteComponentProps<{}>> = ({...props}) => {
    const [sortCard, setSortCard] = useState({ text: "Created Date", value: 3 });
    const handleCardInfo = (id?: string) =>{
        const detailPath = APP_ROUTERS.HOME + '/' + '123';
        props.getCardDetail();
        props.history.push(detailPath);
    }

    const handleSortCard = (e: DropDownListChangeEvent) => {
        setSortCard(e.target.value);
    }

    return (
        <React.Fragment>
            <h3>Results List</h3>
            <div className="row align-items-center mt-24">
                <div className="col">
                    <p id="counterMsg">
                        <span id="counter"></span> cardholders found
                    </p>
                </div>
                <div className="col-auto">
                    <strong>Sort by:</strong>
                    <DropdownWrapper hasBorderLess={true} className="d-inline-block">
                        <DropDownList 
                            data={SortBy} 
                            textField="text"
                            dataItemKey="value"
                            defaultValue={sortCard}
                            onChange={(e) => handleSortCard(e)}
                        />
                    </DropdownWrapper>
                </div>
                <div className="col-auto">
                    <div className="d-flex align-items-center">
                        <strong>Order by:</strong>
                        <div className="btn-group ml-4" id ="btn-group-deasc">
                            <button type="button" className="btn-icon btn-icon-secondary">
                                <span className="icon-descending"></span>
                            </button>
                            <button type="button" className="btn-icon btn-icon-secondary active">
                                <span className="icon-ascending"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">  
                <div className={cn("listview-container mt-16", {
                    'loading' : props.cards.length === 0
                })}>
                    {props.cards.map( (item, index) => <div className="listview-item" key={index} onClick={()=> handleCardInfo(item.CardNumber)}>
                        <h5 className="text-mdash">{item.FullName}</h5>
                        <div className="row">
                            <div className="col">
                                <div className="form-group-static topless">
                                <span className="form-control-label">Program Name</span>
                                <span className="form-control-text">{item.ProgramName}</span>
                            </div>
                            </div>
                            <div className="col-2">
                            <div className="form-group-static topless">
                                <span className="form-control-label">Card Number</span>
                                <span className="form-control-text">{item.CardNumber}</span>
                            </div>
                        </div>
                            <div className="col-auto col-xl-1">
                            <div className="form-group-static topless">
                                <span className="form-control-label">Created Date</span>
                                <span className="form-control-text">{item.CardCreatedDate}</span>
                            </div>
                        </div>
                            <div className="col-2">
                            <div className="form-group-static topless">
                                <span className="form-control-label">Email</span>
                                <span className="form-control-text text-ellipsis" title="#:Email#">{item.Email}</span>
                            </div>
                        </div>
                            <div className="col">
                            <div className="form-group-static topless">
                                <span className="form-control-label">Address</span>
                                <span className="form-control-text">{item.Address}</span>
                            </div>
                        </div>
                            <div className="col-auto col-xl-1">
                            <div className="form-group-static topless">
                                <span className="form-control-label">Last 4 SSN</span>
                                <span className="form-control-text">{item.Last4ssn}</span>
                            </div>
                        </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </React.Fragment>
    );
};

CardList.displayName = 'CardList';
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardList));