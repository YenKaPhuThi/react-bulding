import Loadable from 'react-loadable';
import { Loading } from '../../containers';
const DynamicImport = (LoaderComponent: any) =>     Loadable({
    loader: LoaderComponent,
    loading: Loading,
    delay: 0,
  });
  
export const TOOLBAR_TYPES = [
    {
        id: 'btnProgramInfo',
        icon: 'icon-work',
        name:'Program',
        type: 'Popup',
        component: DynamicImport(() => import('./ProgramInfoPopup')),
    },
    {
        id: 'btnCardholderInfo',
        icon: 'icon-user',
        name:'Cardholder',
        type: 'Popup',
        component: DynamicImport(() => import('./CardHolderInfoPopup')),
    },
    {
        id: 'btnCardInfo',
        icon: 'icon-card',
        name:'Card',
        type: 'Popup',
        component: DynamicImport(() => import('./CardInfoPopup')),
    },
    {
        id: 'btnAccountInfo',
        icon: 'icon-card-info',
        name:'Account',
        type: 'Popup',
        component: DynamicImport(() => import('./AccountInfoPopup')),
    },   
    {
        id: 'btnAuthorize',
        icon: 'icon-risk',
        name:'Authorize',
        type: 'Dialog',
        title: 'Authenticate Caller',
        component: DynamicImport(() => import('./AuthDialog')),
    },
    {
        id: 'btnACHTransaction',
        icon: 'icon-user-mainternance',
        name:'Cancel ACH Transaction',
        title: 'ACH Transaction',
        type: 'Dialog',
        component: DynamicImport(() => import('./AuthDialog')),
    },
];

export const ToolBarType = {
    showPopUp: false,
    showDialog: false,
}