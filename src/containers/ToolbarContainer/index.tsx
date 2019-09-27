import React, {useState} from 'react';
import { Popover, Overlay, ButtonToolbar } from 'react-bootstrap';
import { Dialog, DialogCloseEvent } from '@progress/kendo-react-dialogs';
import {TOOLBAR_TYPES, ToolBarType} from './constants';
import {PortalWrapper} from '../../components';
import * as _ from 'lodash';

type WrapperProps = {
    index: number,
}

const PopoverWrapper: React.FC<WrapperProps> = ({...props}) => {
    const PopupComponent = TOOLBAR_TYPES[props.index].component;
    return (
        <div className="popover-body">
            <PopupComponent />
        </div>
    )
}

const DialogWrapper: React.FC<WrapperProps> = ({...props}) => {
    const DialogComponent = TOOLBAR_TYPES[props.index].component;
    return (
        <div className="window-content-body">
            <DialogComponent />          
        </div>
    )
}

const ToolBar: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [toolIndex, setToolIndex] = useState(0);
    const [toolBarType, setToolBarType] = useState(ToolBarType);
    const [anchor, setAnchor] = useState<HTMLElement | undefined>(undefined);

    const handleToolBarClick = (event: React.FormEvent<HTMLButtonElement>, index: number) => {
        const target = event.currentTarget as HTMLElement;
        const {type} = TOOLBAR_TYPES[index];

        if(type === 'Popup'){
            setToolBarType({showDialog: false, showPopUp: true});
        }else{
            setToolBarType({showDialog: true, showPopUp: false});
        }

        setToolIndex(index);
        if(anchor != target){
            setAnchor(target);
            setShowPopup(true);
        }else{
            setShowPopup(!showPopup);
        }
    };

    const handleCloseDialog = (e: DialogCloseEvent) => {
        setToolBarType({showDialog: false, showPopUp: false});
    }

    const getDialogTitle = (index: number) => {
        const {title} = TOOLBAR_TYPES[index];
        return title ? title : '';
    }

    return (
        <React.Fragment>
            <div className="toolbar-wrapper sk-toolbar-wrapper">
                <div className="toolbar-container sk-toolbar-container">
                    <nav>
                        <ButtonToolbar className="toolbar">
                            {TOOLBAR_TYPES.map( (item, index) =>
                                <button key={index} type="button" id={item.id} className="toolbar-item" onClick={(e)=> handleToolBarClick(e, index)}>
                                    <span className={item.icon}></span>
                                </button>
                                )}
                            <Overlay
                                show={toolBarType.showPopUp && showPopup}
                                target={anchor}
                                placement="left-start"
                                >
                                <Popover id="popover-contained" className="size-lg">
                                    <PopoverWrapper index={toolIndex}/>
                                </Popover>
                            </Overlay>
                            { toolBarType.showDialog &&<PortalWrapper>
                                <Dialog title={getDialogTitle(toolIndex)} onClose={handleCloseDialog} >
                                    <DialogWrapper index={toolIndex}/>
                                </Dialog>
                            </PortalWrapper>}
                        </ButtonToolbar>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )
}

ToolBar.displayName = 'ToolBar';
export default ToolBar;