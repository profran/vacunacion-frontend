import { combineReducers } from 'redux';
import { login } from './auth/login';
import { signup } from './auth/signup';

const rootReducer = combineReducers({
    login,
    signup
});

export default rootReducer;