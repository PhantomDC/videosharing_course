import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {userAuth} from './reducers';

export const rootReducer = combineReducers({userAuth});

export const store = createStore(rootReducer, applyMiddleware(thunk))
