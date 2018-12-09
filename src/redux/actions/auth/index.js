export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const BASE_URL = '';
const TOKEN_AUTH_ENDPOINT = '';
const TOKEN_VERIFICATION_ENDPOINT = '';


export function requestLogin(credentials) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticaded: false,
        credentials
    }
}

export function receiveLogin(response) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticaded: true,
        response
    }
}

export function loginFailure(response) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticaded: false,
        response
    }
}

export function loginUser(creds) {

    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: creds.user,
            password: creds.password
        })
    }

    return dispatch => {
        dispatch(requestLogin(creds))

        return fetch(BASE_URL + TOKEN_AUTH_ENDPOINT, config)
            .then(response =>
                response.json().then(json => ({ json, response }))
            ).then(({ json, response }) => {
                if (!response.ok) {
                    dispatch(loginFailure(json))
                    return Promise.reject(json)
                } else {
                    localStorage.setItem('token', json.token)
                    dispatch(receiveLogin(json))
                }
            }).catch(err => console.log("Error: ", err))
    }
}

export const VERIFY_TOKEN_REQUEST = 'VERIFY_TOKEN_REQUEST';
export const VERIFY_TOKEN_SUCCESS = 'VERIFY_TOKEN_SUCCESS';
export const VERIFY_TOKEN_FAILURE = 'VERIFY_TOKEN_FAILURE';

function requestVerifyToken() {
    return {
        type: VERIFY_TOKEN_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveVerifyTokenSuccess() {
    return {
        type: VERIFY_TOKEN_SUCCESS,
        isFetching: false,
        isAuthenticated: true
    }
}

function verifyError(message) {
    return {
        type: VERIFY_TOKEN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

export function verifyToken(token) {

    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'token': token })
    }

    return dispatch => {

        dispatch(requestVerifyToken);

        return fetch(BASE_URL + TOKEN_VERIFICATION_ENDPOINT, config)
            .then(response =>
                response.json().then(json => ({ json, response }))
            ).then(({ json, response }) => {
                if (!response.ok) {
                    dispatch(verifyError(json))
                    return Promise.reject(json)
                } else {
                    dispatch(receiveVerifyTokenSuccess())
                }
            }).catch(err => console.log("Error: ", err))
    }
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout())
        localStorage.removeItem('token')
        dispatch(receiveLogout())
    }
}
