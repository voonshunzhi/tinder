import {FACEBOOK_LOGIN, FACEBOOK_LOGOUT} from '../actions/actionTypes';
import {updateState} from '../misc/misc';

const UserReducer = (state = {},actions) => {
    switch(actions.type){
        case FACEBOOK_LOGIN:
            return {
                ...state,
                accessToken:actions.payload.accessToken
            }
        case FACEBOOK_LOGOUT:
            return {
                ...state,
                accessToken:actions.payload.accessToken
            }
        default:
        return state;
    }
}

export default UserReducer;