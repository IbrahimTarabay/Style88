import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
/*this is something that is nice for us to use
when debugging our redux code*/
import rootReducer from './root-reducer';

const middlewares = [logger];
const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;