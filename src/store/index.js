import { createStore, combineReducers, applyMiddleware } from 'redux';
import { bugsReducer, spinnerReducer } from '../reducers';

import thunk from 'redux-thunk'

let rootReducer = combineReducers({
	bugState : bugsReducer,
	spinnerState : spinnerReducer
});

let appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;

