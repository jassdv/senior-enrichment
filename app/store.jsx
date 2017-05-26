import { createStore
    , combineReducers
    , compose
    , applyMiddleware } from 'redux';

import rootReducer from './reducers/index';

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))
