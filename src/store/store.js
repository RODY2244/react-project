// store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import dataReducer from './reducers';
import ordersReducer from './orderReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    data: dataReducer,
    order: ordersReducer

});

export const store = createStore(rootReducer, applyMiddleware(thunk));