import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../../redux/actions/auth/signup';

const md5 = require('md5');

class SigUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = {
                ...prevstate
            };
            newState[name] = value;
            return newState;
        });
    };

    handle_signup = (e, creds) => {
        this.props.signUpUser({
            username: creds.username,
            password: md5(creds.password),
            name: creds.name,
            last_name: creds.last_name,
            dni: creds.dni
        });
    }

    render() {
        return (
            <div>
                <input name="username" type="text" placeholder="Username" onChange={this.handle_change} />
                <input name="name" type="text" placeholder="Name" onChange={this.handle_change} />
                <input name="dni" type="text" placeholder="DNI" onChange={this.handle_change} />
                <input name="password" type="password" placeholder="Password" onChange={this.handle_change} />
                <button onClick={e => this.handle_signup(e, this.state)}>Login</button>
            </div>
        );
    }
}

export default connect(null, { signUpUser })(SigUpForm);