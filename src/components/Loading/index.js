import React, { Component } from 'react';
import './styles.scss';

class Loading extends Component {
    render() {
        return (
            <div class="container">
                <div class="animation">
                    <span class="ball"></span>
                    <span class="ball"></span>
                    <span class="ball"></span>
                    <span class="ball"></span>
                </div>
            </div>
        );
    }
}

export default Loading;