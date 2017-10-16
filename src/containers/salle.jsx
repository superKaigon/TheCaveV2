import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationList from './locationList'
import NavBarChoixSalle from '../components/navBarChoixSalle';



class Salle extends Component {
	render() {
		const { salle, table } = this.props

		if (!salle) {
			return (
				<div className='animated fadeInUp'>
					<NavBarChoixSalle />
					<div>Sélectionner une salle</div>
				</div>
			)
		}
		if (!table) {
			return (
				<div className='animated fadeInUp'>
					<NavBarChoixSalle />
					<div className='row animated fadeInRight'>
						<div className='col-md-11'>
							<LocationList />
						</div>
						<div className='col-md-1'>Sélectionnez une table</div>
					</div>
				</div>
			)
		}
		return (
			<div className='animated fadeInUp'>
				<NavBarChoixSalle />
				<div className='row animated fadeInRight'>
					<div className='col-md-11'>
						<LocationList />
					</div>

					<div className='col-md-1'>Vous êtes assis en salle {salle.id} à la {table.name}</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		salle: state.activeSalle,
		table: state.activeTable

	}
}

export default connect(mapStateToProps)(Salle)