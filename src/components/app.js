import React, { Component } from 'react';
import NavBar from './navBar';
import { Route, Switch } from 'react-router-dom'
import Salle from '../containers/salle'
import WeAre from './weAre'
import ContactUs from './contactUs'
import Connection from '../containers/connection'

export default class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Switch>
					<Route exact path='/' component={Salle} />
					<Route path='/weAre' component={WeAre} />
					<Route path='/contactUs' component={ContactUs} />
					<Route path = '/connection' component = {Connection}/>
				</Switch>
			</div>

		);
	}
}
