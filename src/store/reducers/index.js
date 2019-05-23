import { combineReducers } from 'redux';

import UserReducer from './user_reducer';

const rootReducer = combineReducers({
    User: UserReducer
})

export default rootReducer;