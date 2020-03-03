import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
/*this is something that is nice for us to use
when debugging our redux code*/
import {persistStore} from 'redux-persist';
/*allows our browser to actually cache our store*/

import rootReducer from './root-reducer';

const middlewares = [logger];
export const store = createStore(rootReducer,applyMiddleware(...middlewares));
/*applyMiddleware(...middlewares) for know the prev state,action,next state*/
export const persistor = persistStore(store);