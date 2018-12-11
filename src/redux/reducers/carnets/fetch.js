import {
    FETCH_CARNETS_LIST_REQUEST,
    FETCH_CARNETS_LIST_SUCCESS,
    FETCH_CARNETS_LIST_FAILURE
} from '../../actions/carnets/fetch';

export function vacunacion(state = {
    isFetching: false,
    carnets: []
}, action) {
    switch (action.type) {
        case FETCH_CARNETS_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            })
        case FETCH_CARNETS_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                carnets: action.carnets
            })
        case FETCH_CARNETS_LIST_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            })
        default:
            return state;
    }
}