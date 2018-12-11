import { BASE_URL, SIGN_UP_USER_ENDPOINT, SIGN_UP_MEDIC_ENDPOINT } from '../urls'

export const SIGN_UP_USER_REQUEST = 'SIGN_UP_USER_REQUEST';
export const SIGN_UP_USER_SUCCESS = 'SIGN_UP_USER_SUCCESS';
export const SIGN_UP_USER_FAILURE = 'SIGN_UP_USER_FAILURE';

function requestUserSignup(data) {
    return {
        type: SIGN_UP_USER_REQUEST,
        data
    }
}

function receiveUserSignup() {
    return {
        type: SIGN_UP_USER_SUCCESS,
    }
}

function signupUserFailure(message) {
    return {
        type: SIGN_UP_USER_FAILURE,
        eror: message
    }
}

export function signUpUser(data) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    return dispatch => {

        dispatch(requestUserSignup);

        return fetch(BASE_URL + SIGN_UP_USER_ENDPOINT, config)
            .then(response =>
                response.json().then(json => ({ json, response }))
            ).then(({ json, response }) => {
                if (!response.ok) {
                    dispatch(signupUserFailure(json))
                    return Promise.reject(json)
                } else {
                    dispatch(receiveUserSignup())
                }
            }).catch(err => {
                console.log("Error: ", err);
                dispatch(signupUserFailure(err));
            });

    }
}

export const SIGN_UP_MEDIC_REQUEST = 'SIGN_UP_MEDIC_REQUEST';
export const SIGN_UP_MEDIC_SUCCESS = 'SIGN_UP_MEDIC_SUCCESS';
export const SIGN_UP_MEDIC_FAILURE = 'SIGN_UP_MEDIC_FAILURE';

function requestMedicSignup(data) {
    return {
        type: SIGN_UP_MEDIC_REQUEST,
        data
    }
}

function receiveMedicSignup() {
    return {
        type: SIGN_UP_MEDIC_SUCCESS,
    }
}

function signupMedicFailure(message) {
    return {
        type: SIGN_UP_MEDIC_FAILURE,
        eror: message
    }
}

export function signUpMedic(data) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    return dispatch => {

        dispatch(requestMedicSignup);

        return fetch(BASE_URL + SIGN_UP_MEDIC_ENDPOINT, config)
            .then(response =>
                response.json().then(json => ({ json, response }))
            ).then(({ json, response }) => {
                if (!response.ok) {
                    dispatch(signupMedicFailure(json))
                    return Promise.reject(json)
                } else {
                    dispatch(receiveMedicSignup())
                }
            }).catch(err => {
                console.log("Error: ", err);
                dispatch(signupMedicFailure(err));
            });
    }
}