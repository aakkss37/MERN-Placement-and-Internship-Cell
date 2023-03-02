import { legacy_createStore, combineReducers, applyMiddleware } from "redux";  //legacy_createStore--->  legacy version of the "createStore"
import { composeWithDevTools } from "redux-devtools-extension"
/* "composeWithDevTools" is a function from the "redux-devtools-extension" library that enables the 
integration of the Redux DevTools browser extension into a Redux-based application. It enhances 
the development experience by allowing developers to inspect and debug the state changes of the 
application in real-time, and provides various tools for interacting with the Redux store, such 
as time travel debugging and state persistence. */
import thunk from 'redux-thunk';
/*
redux-thunk is a middleware for Redux that allows you to write action creators that return a function 
instead of an action. This function will receive the dispatch function from the Redux store as an 
argument, which it can use to dispatch one or many actions. This allows for asynchronous operations 
to be performed and multiple actions to be dispatched based on the outcome of the operation.

For example, instead of dispatching an action that represents a network request in progress and a 
separate action for when the request succeeds or fails, a thunk can be used to perform the network 
request and dispatch the appropriate actions based on the result, all within a single action creator.

This approach can lead to cleaner and more maintainable code, as it keeps related logic in a single 
place, rather than spreading it across multiple action creators and reducers.
*/


import { studentLoginReducer } from "./reducer/studentReducer.js";


const reducer = combineReducers({
	logedinStudent: studentLoginReducer,
})


const middleware = [thunk];
const store = legacy_createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;