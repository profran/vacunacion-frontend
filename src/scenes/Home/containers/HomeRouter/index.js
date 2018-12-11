import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CarnetListDisplayer from './containers/CarnetListDisplayer';
import CarnetDetailDisplayer from './containers/CarnetDetailDisplayer';

class HomeRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/home' component={CarnetListDisplayer}/>
                <Route path='/home/:id' component={CarnetDetailDisplayer}/>
            </Switch>
        );
    }
}

export default HomeRouter;