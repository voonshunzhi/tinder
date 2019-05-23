import {FACEBOOK_LOGIN,FACEBOOK_LOGOUT} from '../actions/actionTypes';
export const facebookLogin = accessToken => {
    return {
        type:FACEBOOK_LOGIN,
        payload:{
            accessToken:accessToken
        }
    }
}

export const facebookLogout = accessToken => {
    return {
        type:FACEBOOK_LOGOUT,
        payload:{
            accessToken:null
        }
    }
}
