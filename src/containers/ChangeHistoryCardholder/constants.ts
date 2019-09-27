import { AppState } from '../../store/states';
import { cardHolderActions } from '../../store/actions';

export type CardProps = {
    triggerOpen: boolean,
    onCloseCardInfo: () => void,
}

export const mapStateToProps = (state: AppState) => ({
    cardHodler: state.cardholder.getCardholderHistory
});

export const mapDispatchToProps = {
    getCardHistory: cardHolderActions.getCardholderHistory
};

export type CardHistoryProps = ReturnType< typeof mapStateToProps> & typeof mapDispatchToProps;