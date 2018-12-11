import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../../scenes/Login';
import Home from '../../scenes/Home';

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
    return { isAuthenticated: true }
}

export default connect(mapStateToProps)(MainRouter);