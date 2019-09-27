import { ActionType } from "typesafe-actions";
import {cardHolderActions} from '.';
import { authActions } from '.';

export type CardHolderActions = ActionType<typeof cardHolderActions>;
export type LoadFunds = ActionType<typeof cardHolderActions.getFunds>;
export type LoadCommentCategories = ActionType<typeof cardHolderActions.getCommentCategories>;
export type LoadAlert = ActionType<typeof cardHolderActions.getAlert>;
export type LoadTrans = ActionType<typeof cardHolderActions.getTrans>;
export type SearchAction = ActionType<typeof cardHolderActions.searchCard>

export type AuthActions = ActionType< typeof authActions>;
export type LogoutActions = ActionType< typeof authActions.logout>;
export type LoginActions = ActionType< typeof authActions.login>;

export type GetCardDetailActions = ActionType<typeof cardHolderActions.getCardDetail> ;
export type LoadCardDetailActions = ActionType<typeof cardHolderActions.loadFunds> & typeof cardHolderActions.loadCommentCategories & typeof cardHolderActions.loadTrans & typeof cardHolderActions.loadAlert ;

export type GetCardholderInfo = ActionType<typeof cardHolderActions.getCardholderInfo>;
export type LoadCardholderInfo = ActionType<typeof cardHolderActions.loadCardholderInfo>;

export type SaveCardholderInfo = ActionType<typeof cardHolderActions.saveCardholderInfo>;

export type GetCardholderHistory = ActionType<typeof cardHolderActions.getCardholderHistory>;