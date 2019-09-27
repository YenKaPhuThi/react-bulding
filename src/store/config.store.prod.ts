import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

export function configStore(initialState?: any) {
    const store = createStore(rootReducer, initialState, compose(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);
    return store;
}