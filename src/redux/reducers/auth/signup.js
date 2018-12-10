import {
    SIGN_UP_USER_REQUEST,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER_FAILURE,
    SIGN_UP_MEDIC_REQUEST,
    SIGN_UP_MEDIC_SUCCESS,
    SIGN_UP_MEDIC_FAILURE
} from '../../actions/auth/signup';

export function signup(state = {
    isFetching: false
}, action) {
    switch (action.type) {
        case SIGN_UP_USER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                data: action.data
            })
        case SIGN_UP_USER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                redirect: '/login'
            })
        case SIGN_UP_USER_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            })
        case SIGN_UP_MEDIC_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                data: action.data
            })
        case SIGN_UP_MEDIC_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                redirect: '/login'
            })
        case SIGN_UP_MEDIC_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            })
        default:
            return state;
    }
}