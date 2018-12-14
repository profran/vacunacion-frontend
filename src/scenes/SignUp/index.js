import React, { Component } from 'react';
import './styles.scss';

import SignUpForm from '../../components/SignUpForm';

class SignUp extends Component {
    render() {
        return (
            <div className='signup-scene'>
                <SignUpForm />
            </div>
        );
    }
}

export default SignUp;