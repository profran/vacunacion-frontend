import { combineReducers } from 'redux';
import { login } from './auth/login';
import { signup } from './auth/signup';
import { vacunacion } from './carnets/fetch';


const rootReducer = combineReducers({
    login,
    signup,
    vacunacion
});

export default rootReducer;