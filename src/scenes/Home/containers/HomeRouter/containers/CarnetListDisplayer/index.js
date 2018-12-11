import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarnetMiniDisplayer from './components/CarnetMiniDisplayer';

class CarnetListDisplayer extends Component {
    render() {
        const carnets = this.props.carnets.map(carnet => <CarnetMiniDisplayer {...carnet}/>)
        return (
            <div>
                {carnets}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        carnets: [
            {
                id: 12313,
                owner: {
                    name: 'xdxxd',
                    last_name: 'ffffff',
                    dni: '26589423',
                    is_child: true
                }
            }
        ]
    }
}

export default connect(mapStateToProps)(CarnetListDisplayer);