import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = () => (<h1>/login</h1>);
const Home = () => (<h1>/home</h1>);

const MainRouter = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' render={() => (props.isAuthenticated ? <Redirect to='/home' /> : <Redirect to='/login' />)} />
            <Route path='/login' component={Login} />
            <Route path='/home' render={() => (props.isAuthenticated ? <Home /> : <Redirect to='/login' />)} />
        </Switch>
    </BrowserRouter>
);


function mapStateToProps(state) {
    return { isAuthenticated: state.authReducer.isAuthenticated }
}

export default connect(mapStateToProps)(MainRouter);