import { AppState } from '../../store/states';
import { cardHolderActions } from '../../store/actions';
import { CardModel } from '../../models';

export type CardholderState = CardModel.CardholderInfo;

export type CardHolderAction = | {type: 'CHANGE', result: CardModel.CardholderInfo} | {type: 'UPDATE', result: CardModel.CardholderInfo} | {type: 'RESET', result: CardModel.CardholderInfo};

export type CardProps = {
    triggerOpen: boolean,
    onCloseCardInfo: () => void,
}

export const mapStateToProps = (state: AppState) => ({
    cardHodler: state.cardholder.getCardholderInfo
});

export const mapDispatchToProps = {
    saveCardInfo: cardHolderActions.saveCardholderInfo
};

export type CardInfoProps = ReturnType< typeof mapStateToProps> & typeof mapDispatchToProps;