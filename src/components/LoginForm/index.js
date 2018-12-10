import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/auth/login';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        };
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

    handle_login = (e, creds) => {
        this.props.loginUser(creds);
    }

    render() {
        return (
            <div>
                <input name="username" type="text" placeholder="Email" onChange={this.handle_change} />
                <input name="password" type="password" placeholder="Password" onChange={this.handle_change} />
                <button onClick={e => this.handle_login(e, this.state)}>Login</button>
            </div>
        );
    }
}

export default connect(null, { loginUser })(LoginForm);