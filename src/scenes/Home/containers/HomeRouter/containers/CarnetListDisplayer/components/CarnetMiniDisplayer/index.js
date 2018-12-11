import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CarnetMiniDisplayer extends Component {
    render() {
        return (
            <Link to={'/home/' + this.props.id}>
                <h1>{this.props.owner.name} {this.props.owner.last_name}</h1>
                <ul>
                    <li>{this.props.owner.dni}</li>
                    <li>{this.props.owner.is_child}</li>
                    <li>{this.props.id}</li>
                </ul>
            </Link>
        );
    }
}

export default CarnetMiniDisplayer;