import { createStore,compose,applyMiddleware } from 'redux';

import promiseMiddleware from 'redux-promise';

import rootReducer from '../reducers/index';

let reduxCompose = compose;

//Setting up RN debugger

if(__DEV__){

reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

}

//Create the store

const configureStore = () => {

  return createStore(rootReducer,reduxCompose(applyMiddleware(promiseMiddleware)));

}

 

export default configureStore;