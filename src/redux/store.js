import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;
