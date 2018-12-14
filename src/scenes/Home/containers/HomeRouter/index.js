import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CarnetListDisplayer from './containers/CarnetListDisplayer';
import CarnetDetailDisplayer from './containers/CarnetDetailDisplayer';

import './styles.scss';

class HomeRouter extends Component {
    render() {
        return (
            <div className='home-router'>
                <Switch>
                    <Route exact path='/home' component={CarnetListDisplayer} />
                    <Route path='/home/:id' component={CarnetDetailDisplayer} />
                </Switch>
            </div>
        );
    }
}

export default HomeRouter;