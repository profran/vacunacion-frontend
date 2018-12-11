import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarnetMiniDisplayer from './components/CarnetMiniDisplayer';
import { fetchCarnetsList } from '../../../../../../redux/actions/carnets/fetch'

class CarnetListDisplayer extends Component {

    componentDidMount () {
        this.props.fetchCarnetsList(localStorage.token)
    }

    render() {
        const carnets = this.props.carnets.map(carnet => <CarnetMiniDisplayer {...carnet}/>)
        const loading = this.props.status ? <h3>Loading...</h3> : <></>
        return (
            <div>
                {loading}
                {carnets}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        carnets: state.vacunacion.carnets,
        status: state.vacunacion.isFetching
    }
}

export default connect(mapStateToProps, { fetchCarnetsList })(CarnetListDisplayer);