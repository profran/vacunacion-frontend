import React, { Component } from 'react';
import './styles.scss';

import LoginForm from '../../components/LoginForm';

class Login extends Component {
    render() {
        return (
            <div className='login-scene'>
                <LoginForm />
            </div>
        );
    }
}

export default Login;