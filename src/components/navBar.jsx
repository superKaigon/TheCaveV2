import React, { Component } from 'react';
import InfoCompte from '../containers/infoCompte';
import {Link} from 'react-router-dom'

class NavBar extends Component {
	
	render () {

		return (
			<nav className="navbar navbar-dark bg-dark row">
				<div className='col-md-8'>
					<Link to ='/'><button type="button" className="btn btn-secondary" >THE CAVE</button></Link>
					<Link to = '/contactUs'><button type="button" className="btn btn-secondary" >Contact Us</button></Link>
					<Link to ='/weAre'><button type="button" className="btn btn-secondary" >Qui Sommes-nous ?</button></Link>	
				</div>
				<div className='col-md-4'>
					<InfoCompte/>
				</div>
			</nav>
		)
	}
	

}


export default (NavBar)
