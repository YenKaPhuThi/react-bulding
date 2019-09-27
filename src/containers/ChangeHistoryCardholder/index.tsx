import React, { useEffect, useState } from 'react';
import { Grid , GridColumn as Column} from '@progress/kendo-react-grid';
import {CardHistoryProps, mapStateToProps, mapDispatchToProps, CardProps} from './constants';
import { connect } from 'react-redux';
import { Dialog } from '@progress/kendo-react-dialogs';
import cn from 'classnames';

const ChangeHistoryCardholder: React.FC<CardHistoryProps & CardProps> = ({...props}) => {

    const [toogleDialog, setToogleDialog] = useState(false);
    
    const handleToogleDialog = (): void => {
        setToogleDialog(!toogleDialog);
        props.onCloseCardInfo();
    }

    useEffect(() => {
        setToogleDialog(props.triggerOpen);
        props.cardHodler.Data.length === 0 && props.getCardHistory({});
    }, [props.cardHodler.Data, props.triggerOpen]);

    return (
        <React.Fragment>
            {toogleDialog && <Dialog title="Change History" onClose={handleToogleDialog} className={"window-xl"}>
                <Grid 
                data={props.cardHodler.Data}
                sortable
                reorderable
                expandField="expanded"
                pageable={true}
                total={props.cardHodler.Total}
                className={cn("text-left",
                    {
                        'loading': props.cardHodler.Data.length === 0
                    }
                )}
                onRowClick={(e) => {}}
                >
                    <Column field="UpdateDate" title="DATE TIME"/>        
                    <Column field="CipFlag" title="CLIP FLAG"/>
                    <Column field="UpdatedUserName" title="UPDATED BY"/>
                    <Column field="UpdatedPersonId" title="USER ID"/>
                    <Column field="ChangeType" title="CHANGE TYPE"/>
                    <Column field="Method" title="METHOD"/>
                    <Column field="ChangedValue" title="CHANGE"/>
                </Grid>
            </Dialog>}
        </React.Fragment>
    )
}

ChangeHistoryCardholder.displayName = 'ChangeHistoryCardholder';

export default connect(mapStateToProps, mapDispatchToProps)(ChangeHistoryCardholder);