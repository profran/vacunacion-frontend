import React, { Component } from 'react';
import HomeRouter from './containers/HomeRouter';
import NavBar from '../../components/NavBar';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <HomeRouter />
            </div>
        );
    }
}

export default Home;