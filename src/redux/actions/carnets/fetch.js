import { BASE_URL, CARNETS_LIST_ENDPOINT } from '../urls';

export const FETCH_CARNETS_LIST_REQUEST = 'FETCH_CARNETS_LIST_REQUEST';
export const FETCH_CARNETS_LIST_SUCCESS = 'FETCH_CARNETS_LIST_SUCCESS';
export const FETCH_CARNETS_LIST_FAILURE = 'FETCH_CARNETS_LIST_FAILURE';

function requestFetchCarnetsList() {
    return {
        type: FETCH_CARNETS_LIST_REQUEST
    }
}

function receiveFetchCarnetsList(carnetList) {
    return {
        type: FETCH_CARNETS_LIST_SUCCESS,
        carnets: carnetList
    }
}

function fetchCarnetsListFailure(message) {
    return {
        type: FETCH_CARNETS_LIST_FAILURE,
        error: message
    }
}

export function fetchCarnetsList(token) {

    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'token': token
        })
    }

    return dispatch => {
        dispatch(requestFetchCarnetsList())

        return fetch(BASE_URL + CARNETS_LIST_ENDPOINT, config)
            .then(response =>
                response.json().then(json => ({ json, response }))
            ).then(({ json, response }) => {
                console.log(response)
                if (!response.ok) {
                    dispatch(fetchCarnetsListFailure(json))
                    return Promise.reject(json)
                } else {
                    dispatch(receiveFetchCarnetsList(json))
                }
            }).catch(err => {
                console.log("Error: ", err);
                dispatch(fetchCarnetsListFailure(err))
            });
    }
}