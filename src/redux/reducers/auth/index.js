import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    VERIFY_TOKEN_REQUEST,
    VERIFY_TOKEN_SUCCESS,
    VERIFY_TOKEN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS
} from '../../actions/auth';

export function authReducer(state = {
    isFetching: false,
    isAuthenticated: false
}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                credentials: action.credentials
            })
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                token: action.response
            })
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                error: action.response
            })
        case VERIFY_TOKEN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: true
            })
        case VERIFY_TOKEN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true
            })
        case VERIFY_TOKEN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false
            })
        case LOGOUT_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: true
            })
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false
            })
        default:
            return state;
    }
}