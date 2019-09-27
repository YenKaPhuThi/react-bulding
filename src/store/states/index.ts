import { StateType } from 'typesafe-actions';
import rootReducer from '../reducers';
import { searchCardReducer } from '../reducers/cardReducers';
export type SearchCardState = StateType<typeof searchCardReducer>;
export type AppState = StateType< typeof rootReducer>;
