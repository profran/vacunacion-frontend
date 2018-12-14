import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './styles.scss';

class CarnetMiniDisplayer extends Component {
    render() {
        return (
                <Link className='mini-displayer' to={'/home/' + this.props.carnet.id}>
                    <h2 className='mini-displayer--title'>{this.props.name}</h2>
                    <ul>
                        <li>{this.props.is_child}</li>
                        <li>{this.props.dni}</li>
                    </ul>
                </Link>
        );
    }
}

export default CarnetMiniDisplayer;