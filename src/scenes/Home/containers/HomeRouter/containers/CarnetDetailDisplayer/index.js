import React, { Component } from 'react';

class CarnetDetailDisplayer extends Component {
    render() {
        return (
            <div>{this.props.match.params.id}</div>
        );
    }
}

export default CarnetDetailDisplayer;