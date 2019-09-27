import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

export function configStore(initialState?: any) {
    const store = createStore(rootReducer, initialState, compose(applyMiddleware(sagaMiddleware), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()));

    sagaMiddleware.run(rootSaga);

    if(module.hot){
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}