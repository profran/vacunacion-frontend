import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarnetMiniDisplayer from './components/CarnetMiniDisplayer';
import { fetchCarnetsList } from '../../../../../../redux/actions/carnets/fetch'

import './styles.scss';
import Loading from '../../../../../../components/Loading';

class CarnetListDisplayer extends Component {

    componentDidMount() {
        this.props.fetchCarnetsList(localStorage.token)
    }

    render() {
        const carnets = this.props.carnets.map(carnet => <CarnetMiniDisplayer {...carnet} />)
        const loading = this.props.status ? <Loading />: <></>
        return (
            <div className='carnet-list-displayer'>
                <h1 className='carnet-list-displayer--title'>Mis carnets</h1>
                {loading}
                <div className='carnet-list-displayer--list'>
                    {carnets}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        carnets: [
            {
                name: 'Francesco Silvetti',
                dni: '42892462',
                is_child: false,
                carnet: {
                    id: 1212231
                }
            },
            {
                name: 'Francesco Silvetti',
                dni: '42892462',
                is_child: true,
                carnet: {
                    id: 1212232
                }
            },
            {
                name: 'Francesco Silvetti',
                dni: '42892462',
                is_child: true,
                carnet: {
                    id: 1212231
                }
            },
            {
                name: 'Francesco Silvetti',
                dni: '42892462',
                is_child: true,
                carnet: {
                    id: 1212232
                }
            },
            {
                name: 'Francesco Silvetti',
                dni: '42892462',
                is_child: true,
                carnet: {
                    id: 1212231
                }
            },
            {
                name: 'Francesco Silvetti',
                dni: '42892462',
                is_child: true,
                carnet: {
                    id: 1212232
                }
            }
        ],
        status: state.vacunacion.isFetching
    }
}

export default connect(mapStateToProps, { fetchCarnetsList })(CarnetListDisplayer);